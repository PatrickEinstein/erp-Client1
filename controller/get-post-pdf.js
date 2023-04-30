import fs from "fs";

const getPdf = (req, res) => {
  const filePath = req.params.path;
  fs.writeFileSync("download.pdf", filePath);
  const pdfBuffer = fs.readFileSync("download.pdf");

  res.set("Content-Type", "application/pdf");
  res.set("Content-Disposition", 'attachment; filename="download.pdf"');
  res.send(pdfBuffer);
};

const PostPdf = (req, res) => {
  const { parameter } = req.body;
  console.log(parameter)
  fs.writeFileSync("download.pdf", filePath);
  const pdfBuffer = fs.readFileSync("download.pdf");

  res.set("Content-Type", "application/pdf");
  res.set("Content-Disposition", 'attachment; filename="download.pdf"');
  res.send(pdfBuffer);
};

export default getPdf;
