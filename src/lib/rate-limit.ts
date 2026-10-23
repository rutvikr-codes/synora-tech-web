/**
 * In-memory sliding window rate limiter for API routes.
 * Prevents automated flood attacks and abuse on the contact form.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up stale IP records every 10 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    for (const [key, record] of rateLimitMap.entries()) {
      record.timestamps = record.timestamps.filter((t) => now - t < windowMs);
      if (record.timestamps.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }, 10 * 60 * 1000);

  if (typeof timer === "object" && "unref" in timer) {
    timer.unref();
  }
}

export interface RateLimitOptions {
  windowMs?: number; // Time window in milliseconds (default 15 minutes)
  maxRequests?: number; // Max requests allowed per window (default 5 requests)
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { allowed: boolean; remaining: number; resetTimeMs: number } {
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // 15 mins
  const maxRequests = options.maxRequests ?? 5; // 5 submissions per 15 mins
  const now = Date.now();

  const record = rateLimitMap.get(identifier) ?? { timestamps: [] };

  // Filter out timestamps outside the active window
  record.timestamps = record.timestamps.filter((t) => now - t < windowMs);

  if (record.timestamps.length >= maxRequests) {
    const oldest = record.timestamps[0];
    const resetTimeMs = windowMs - (now - oldest);
    return {
      allowed: false,
      remaining: 0,
      resetTimeMs: Math.max(0, resetTimeMs),
    };
  }

  // Record this request
  record.timestamps.push(now);
  rateLimitMap.set(identifier, record);

  return {
    allowed: true,
    remaining: maxRequests - record.timestamps.length,
    resetTimeMs: windowMs,
  };
}

// Utility to reset for testing
export function _resetRateLimit() {
  rateLimitMap.clear();
}
