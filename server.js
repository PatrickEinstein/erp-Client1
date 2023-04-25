import { createRequire } from "module";
import pdfTemplate from "./index3.js";
import mailer from "./config/nodeMailer.js";
import User from "./model/user.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const StatusCodes = require("http-status-codes");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const logger = morgan("combined");
const puppeteer = require("puppeteer");

dotenv.config();
const app = express();

mongoose.set("strictQuery", true);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 5001;
app.use(express.json());
app.use(xss());
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public/")));
app.use(logger);
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const connectDB = (url) => {
  return mongoose.connect(url);
};



app.get("/test", (req, res) => {
  res.send("<h1>Welcome to export readiness</h1>");
});

app.use(express.static("build"));

app.post("/create-pdf", async (req, res) => {
  const { data } = req.body;
  const html = pdfTemplate(data);

  fs.writeFileSync("index.html", html);
  // const html2 = fs.readFileSync("index.html", "utf8");


// Puppeteer config starts here

  const puppeteerPdf = (async () => {
    // Create a browser instance
    const browser = await puppeteer.launch();
  
    // Create a new page
    const page = await browser.newPage();
  
    //Get HTML content from HTML file
    const html2 = fs.readFileSync("index.html", "utf-8");
    await page.setContent(html2, { waitUntil: "domcontentloaded" });
  
    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");
  
    // Downlaod the PDF
    await page.pdf({
      path: "techsolutionstuff.pdf",
      format: "A4",
    });
  
    // Close the browser instance
    await browser.close();
  })();
//Pupeterr ends here


  // const options = { format: "Letter" };

  // pdf.create(html2, options).toFile("index.pdf", function (err, res) {
  //   return "Something broke";
  // });

  const dataHandler = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        try {
          const mail = [
            "tundeytoby@gmail.com",
            "patoctave99@gmail.com",
            data.user.email,
          ];
          const subject = "Export Readiness Report";
          const text = "Find result attached below";
          const attachments = [
            {
              // filename: "index.pdf",
              filename: "techsolutionstuff.pdf",
              path: __dirname + "/index.pdf",
              cid: "uniq-index.pdf",
            },
          ];

          mailer(mail, subject, text, attachments);

          resolve();

          return res.status(200).send({
            success: true,
            message: "Check your email for report result",
          });
        } catch (err) {
          return res.status(500).send({
            success: false,
            message: "Failed to send mail",
          });
        }
      }, 5000)
    );
  };

  await dataHandler();

  const pdfBuffer = fs.readFileSync("index.pdf");

  const { firstName, lastName, email, phone, companyName, Products } =
    data.user;
  if (!companyName || !email || !Products) {
    res.status(500).send({
      success: false,
      message: "Provide all values",
    });
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    companyName,
    Products,
  });
  user.pdf = pdfBuffer;

  await user.save();
});

app.get("/fetch-pdf", async (req, res) => {
  res.send(`
  //NOTE
   // To visualize your HTML Page
   // Copy the contents on the index.html file here
   // And load the API from ur browser

   // Or use sendFile()

  `);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection established");

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
