const path = require("path");
const puppeteer = require("puppeteer");

const renderPDF = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = `http://localhost:8080`;
  const pdfPath = path.join(__dirname, "../build/resume.pdf");

  const gotoOptions = { waitUntil: "networkidle2" };
  const pdfOptions = { path: pdfPath, format: "letter" };

  await page.goto(url, gotoOptions);
  await page.pdf(pdfOptions);

  await browser.close();
};

module.exports = {
  renderPDF,
};
