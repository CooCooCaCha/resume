import * as puppeteer from "puppeteer";
import * as path from "path";

const url = `http://localhost:3000`;
const pdfPath = path.join(__dirname, "../build/resume.pdf");

const renderPDF = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const gotoOptions = { waitUntil: "networkidle0" };
  const pdfOptions = { path: pdfPath, format: "letter", printBackground: true };

  await page.goto(url, gotoOptions as any);
  await page.pdf(pdfOptions as any);

  await browser.close();
};

renderPDF();
