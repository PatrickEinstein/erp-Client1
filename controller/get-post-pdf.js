import fs from "fs";

const getPdf = (req, res) => {
  
  const filePath = req.params.path;
  fs.writeFileSync("download.pdf", filePath);
  const pdfBuffer = fs.readFileSync('download.pdf')

  res.set('Content-Type', 'application/pdf')
  res.set('Content-Disposition', 'attachment; filename="download.pdf"')
  res.send(pdfBuffer);
  
};

// const Post = (req, res) => {
    
//     const filePath = req.params.path;
//     const pdfBuffer = fs.readFileSync("download.pdf");
//     // fs.writeFileSync(filePath, (err, data) => {
//     //   if (err) {
//     //     res.status(500).send(err);
//     //   } else {
//     //     res.send(data);
//     //   }
//     // });

//     res.send(pdfBuffer)
//   };


export default getPdf;
