import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, _resetRateLimit } from "../lib/rate-limit";

describe("Rate Limiter Tests", () => {
  beforeEach(() => {
    _resetRateLimit();
  });

  it("should allow initial requests within quota", () => {
    const res1 = checkRateLimit("192.168.1.1", { maxRequests: 3, windowMs: 10000 });
    assert.equal(res1.allowed, true);
    assert.equal(res1.remaining, 2);

    const res2 = checkRateLimit("192.168.1.1", { maxRequests: 3, windowMs: 10000 });
    assert.equal(res2.allowed, true);
    assert.equal(res2.remaining, 1);

    const res3 = checkRateLimit("192.168.1.1", { maxRequests: 3, windowMs: 10000 });
    assert.equal(res3.allowed, true);
    assert.equal(res3.remaining, 0);
  });

  it("should block subsequent requests when quota is exhausted", () => {
    // Fill quota
    checkRateLimit("10.0.0.1", { maxRequests: 2, windowMs: 10000 });
    checkRateLimit("10.0.0.1", { maxRequests: 2, windowMs: 10000 });

    // Exceeded
    const blocked = checkRateLimit("10.0.0.1", { maxRequests: 2, windowMs: 10000 });
    assert.equal(blocked.allowed, false);
    assert.equal(blocked.remaining, 0);
    assert.ok(blocked.resetTimeMs > 0);
  });

  it("should track distinct IPs independently without cross-leakage", () => {
    // Exhaust IP A
    checkRateLimit("192.168.1.100", { maxRequests: 1, windowMs: 10000 });
    const blockedA = checkRateLimit("192.168.1.100", { maxRequests: 1, windowMs: 10000 });
    assert.equal(blockedA.allowed, false);

    // IP B should still be allowed
    const allowedB = checkRateLimit("192.168.1.200", { maxRequests: 1, windowMs: 10000 });
    assert.equal(allowedB.allowed, true);
  });
});
