const serve = require("webpack-serve");
const config = require("../webpack.config.js");

const path = require("path");
const puppeteer = require("puppeteer");

const renderPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `http://localhost:8080`;
    const pdfPath = path.join(__dirname, "../build/resume.pdf");

    const gotoOptions = { waitUntil: "networkidle2" };
    const pdfOptions = { path: pdfPath, format: "A4" };

    await page.goto(url, gotoOptions);
    await page.pdf(pdfOptions);

    await browser.close();
};

serve({ config }).then(server => {
    server.on("build-finished", async ({ server, options }) => {
        await renderPdf();
        console.log("PDF UPDATED");
        if (process.env.ONCE) {
            process.exit(0);
        }
    });
});
