import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import robots from "../app/robots";
import sitemap from "../app/sitemap";

describe("Security, Assets & Technical SEO Verification", () => {
  const rootDir = path.resolve(__dirname, "../../");

  it("should have all required brand SVG assets in public/brand and src/app", () => {
    const symbolPath = path.join(rootDir, "public/brand/symbol.svg");
    const logoDarkPath = path.join(rootDir, "public/brand/synora-logo-dark.svg");
    const logoLightPath = path.join(rootDir, "public/brand/synora-logo-light.svg");
    const iconPath = path.join(rootDir, "src/app/icon.svg");

    assert.ok(fs.existsSync(symbolPath), "public/brand/symbol.svg must exist");
    assert.ok(fs.existsSync(logoDarkPath), "public/brand/synora-logo-dark.svg must exist");
    assert.ok(fs.existsSync(logoLightPath), "public/brand/synora-logo-light.svg must exist");
    assert.ok(fs.existsSync(iconPath), "src/app/icon.svg must exist");
  });

  it("should generate robots.txt pointing to https://synoratech.in and disallowing /api/", () => {
    const robotsData = robots();
    assert.equal(robotsData.host, "https://synoratech.in");
    assert.equal(robotsData.sitemap, "https://synoratech.in/sitemap.xml");

    const rules = Array.isArray(robotsData.rules) ? robotsData.rules[0] : robotsData.rules;
    assert.equal(rules.allow, "/");
    assert.deepEqual(rules.disallow, ["/api/"]);
  });

  it("should generate sitemap.xml with all required corporate routes", () => {
    const sitemapData = sitemap();
    const urls = sitemapData.map((entry) => entry.url);

    assert.ok(urls.includes("https://synoratech.in"), "Homepage must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/platform"), "/platform must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/use-cases"), "/use-cases must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/about"), "/about must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/contact"), "/contact must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/privacy"), "/privacy must be in sitemap");
    assert.ok(urls.includes("https://synoratech.in/terms"), "/terms must be in sitemap");
  });

  it("should ensure no exposed secrets or private API keys exist in client-side code", () => {
    const clientFiles = [
      path.join(rootDir, "src/app/page.tsx"),
      path.join(rootDir, "src/app/platform/page.tsx"),
      path.join(rootDir, "src/app/use-cases/page.tsx"),
      path.join(rootDir, "src/app/about/page.tsx"),
      path.join(rootDir, "src/app/contact/page.tsx"),
      path.join(rootDir, "src/components/contact/ContactForm.tsx"),
    ];

    for (const file of clientFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, "utf8");
        // Ensure no private key pattern or real credentials exist
        assert.doesNotMatch(content, /re_[a-zA-Z0-9_]{20,}/, `Potential API secret found in ${file}`);
        assert.doesNotMatch(content, /BEGIN (RSA|EC|PRIVATE) KEY/, `Private key found in ${file}`);
      }
    }
  });
});
