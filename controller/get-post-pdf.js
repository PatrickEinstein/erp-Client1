import fs from "fs";

const getPdf = (req, res) => {

  const filePath = req.params.path;
  fs.readFileSync(filePath, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};
const Post = (req, res) => {
    
    const filePath = req.params.path;
    fs.writeFileSync(filePath, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  };


export default getPdf;
