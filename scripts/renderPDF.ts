import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const pdfPath = fileURLToPath(new URL("../build/resume.pdf", import.meta.url));

const renderPDF = async () => {
  const server = await preview({
    preview: { host: "127.0.0.1", port: 0, open: false },
  });

  try {
    const url = server.resolvedUrls?.local[0];
    if (!url) throw new Error("Could not determine the preview server URL.");

    const browser = await chromium.launch();

    try {
      const page = await browser.newPage({
        viewport: { width: 800, height: 600 },
      });
      await page.goto(url, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await mkdir(new URL("../build/", import.meta.url), { recursive: true });
      await page.pdf({
        path: pdfPath,
        format: "Letter",
        printBackground: true,
      });
      console.log(`Resume saved to ${pdfPath}`);
    } finally {
      await browser.close();
    }
  } finally {
    await server.close();
  }
};

renderPDF().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
