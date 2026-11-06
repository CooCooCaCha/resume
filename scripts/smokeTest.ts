import assert from "node:assert/strict";
import { chromium } from "playwright";
import { createServer, preview } from "vite";
import data from "../src/data";

const browser = await chromium.launch();
const oversizedModes: string[] = [];

try {
  for (const mode of ["development", "production"] as const) {
    const server =
      mode === "development"
        ? await createServer({
            server: { host: "127.0.0.1", port: 0, open: false },
          })
        : await preview({
            preview: { host: "127.0.0.1", port: 0, open: false },
          });

    try {
      if ("listen" in server) await server.listen();
      const url = server.resolvedUrls?.local[0];
      assert.ok(url, "The server must expose a local URL");

      const page = await browser.newPage();
      try {
        // Routing disables HTTP caching, including during Vite's development reloads.
        await page.route("**/*", (route) => route.continue());
        const errors: string[] = [];
        page.on("pageerror", (error) => errors.push(String(error)));
        page.on("console", (message) => {
          if (message.type() === "error") errors.push(message.text());
        });
        await page.setViewportSize({ width: 816, height: 1056 });
        const response = await page.goto(url, { waitUntil: "networkidle" });
        assert.equal(response?.status(), 200);
        await page.evaluate(() => document.fonts.ready);

        const result = await page.evaluate(() => {
          const header = document.querySelector<HTMLElement>("#root > div")!;
          const content = document.querySelector<HTMLElement>("#root > .grid")!;
          const image = document.querySelector("img")!;
          return {
            text: document.body.innerText,
            headerColor: getComputedStyle(header).backgroundColor,
            textColor: getComputedStyle(document.documentElement).color,
            columns: getComputedStyle(content).gridTemplateColumns,
            sectionFontSize: getComputedStyle(
              content.querySelector(".text-xl")!,
            ).fontSize,
            imageLoaded: image.complete && image.naturalWidth > 0,
            icons: document.querySelectorAll("svg[data-icon]").length,
            bulletWidth: document
              .querySelector("svg[data-icon='circle']")!
              .getBoundingClientRect().width,
            contactIconWidth: document
              .querySelector("svg[data-icon='envelope']")!
              .getBoundingClientRect().width,
            height: document.body.scrollHeight,
            overflowing:
              document.documentElement.scrollWidth > window.innerWidth,
          };
        });

        assert.ok(result.text.includes(data.basics.name.toUpperCase()));
        for (const heading of ["EXPERIENCE", "EDUCATION", "SKILLS"]) {
          assert.ok(
            result.text.includes(heading),
            `Missing section: ${heading}`,
          );
        }
        for (const job of data.work.slice(0, 5)) {
          assert.ok(
            result.text.includes(job.company),
            `Missing company: ${job.company}`,
          );
          if (job.summary) {
            assert.ok(
              result.text.includes(job.summary),
              `Missing summary: ${job.company}`,
            );
          }
          assert.ok(
            result.text.includes(job.title),
            `Missing role: ${job.title}`,
          );
          for (const highlight of job.highlights ?? []) {
            assert.ok(
              result.text.includes(highlight),
              `Missing highlight: ${highlight}`,
            );
          }
          const dates = page.getByText(`${job.startYear} - ${job.endYear}`, {
            exact: true,
          });
          const bounds = await dates.boundingBox();
          assert.ok(
            bounds && bounds.x < 135,
            `Dates must be in the left column: ${job.company}`,
          );
          for (const promotion of job.promotions ?? []) {
            const line = page.getByText(
              `Promoted from ${promotion.title} in ${promotion.year}.`,
              { exact: true },
            );
            assert.equal(
              await line.count(),
              1,
              `Missing promotion: ${job.company}`,
            );
            assert.equal(
              await line.evaluate(
                (element) => getComputedStyle(element).fontStyle,
              ),
              "italic",
            );
          }
        }
        assert.equal(result.headerColor, "rgb(204, 100, 100)");
        assert.equal(result.textColor, "rgb(85, 85, 85)");
        assert.equal(result.columns, "135px 649px");
        assert.equal(result.sectionFontSize, "18px");
        assert.ok(result.imageLoaded, "The avatar must load");
        assert.ok(result.icons >= 3, "Font Awesome icons must render");
        assert.ok(
          result.bulletWidth <= 4,
          "Bullet icons must retain their small size",
        );
        assert.equal(
          result.contactIconWidth,
          12,
          "Contact icons must retain their width",
        );
        if (result.height > 1056) oversizedModes.push(mode);
        assert.equal(
          result.overflowing,
          false,
          "The resume must fit the page width",
        );
        assert.deepEqual(
          errors,
          [],
          "The browser must have no runtime or console errors",
        );
        console.log(
          `${mode}: resume content, layout, images, icons, and browser errors checked`,
        );
      } finally {
        await page.close();
      }
    } finally {
      await server.close();
    }
  }
} finally {
  await browser.close();
}

assert.deepEqual(oversizedModes, [], "The resume must fit a US Letter page");
