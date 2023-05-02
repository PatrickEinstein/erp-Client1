import { createRequire } from "module";
import pdfTemplate from "./index3.js";
import mailer from "./config/nodeMailer.js";
import User from "./model/user.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);
const express = require("express");
const bodyParser = require("body-parser");
import router from "./Routes/userRoutes.js";
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
const cors = require("cors");


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

const allowedOrigins = ["https://admin-one-psi.vercel.app"];

// Do you want to skip the checking of the origin and grant authorization?
//const skipTheCheckingOfOrigin = true;

// MIDDLEWARES
// app.use(
//   cors({
//     origin: function (origin, callback) {
//         // allow requests with no origin (like mobile apps or curl requests)
//         // or allow all origines (skipTheCheckingOfOrigin === true) 
//         if (!origin || skipTheCheckingOfOrigin === true) return callback(null, true);

//         // -1 means that the user's origin is not in the array allowedOrigins
//         if (allowedOrigins.indexOf(origin) === -1) {
//             var msg =
//                 "The CORS policy for this site does not " +
//                 "allow access from the specified Origin.";

//             return callback(new Error(msg), false);
//         }
//         // origin is in the array allowedOrigins so authorization is granted
//         return callback(null, true);
//     },
//   })
// );

app.get("/test", (req, res) => {
  res.send("<h1>Welcome to export readiness</h1>");
});

app.get("/erp/myAdmin", (req, res) => {
  res.send('<button><a href="https://admin-one-psi.vercel.app">GO to Admin</a></button>');
})
//  app.use(express.static("build"));

// Serve static files from the 'build' directory for the root route
app.use("/", express.static(__dirname + "/build"));

// Serve static files from the 'admin' directory for the '/admin' route
app.use("/admin", express.static(__dirname + "/Admin"));

// Serve static files from the public folder
app.use(express.static("public"));

app.use("/users", router);

app.post("/create-pdf", async (req, res) => {
  const { data } = req.body;
  const html = pdfTemplate(data);

  fs.writeFileSync("index.html", html);
  // const html2 = fs.readFileSync("index.html", "utf8");

  const puppeteerPdf = async () => {
    // Create a browser instance
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      timeout: 10000,
    });
    const cssStyles = [
      "h1 {font-size: 24px;}",
      "p {line-height: 1.5;}",
      "#customers {font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;width: 100%;}",

      " #customers td, #customers th {border: 5px solid white;padding: 8px;margin-right : 20px;margin-bottom : 20px;line-height : 30px;}",

      "#customers tr:nth-child(even){background-color: #00FFFF; }",

      "#customers tr:hover {background-color: #ddd; }",

      "tr {border : 1px 1px black solid;padding : 20px;margin-bottom : 20px;}",
      "  td{margin-bottom : 20px; }",
      " #customers th {padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #04AA6D; color: white; margin : 20px;}",

      "body{margin : 30px;}",
      "table {margin-top:300px; }",
      ".image{position : absolute;top : 80px;left : 80px;height : 50px;backgroundcolor: aqua;}",
      ".heading{position : absolute;top : 0;left : 20%;height : 50px;backgroundcolor: aqua;}",
      ".details{line-height : 0px;position : absolute;top : 80px;right : 100px;backgroundcolor: aqua;}",

      " table{box-shadow : 3px 3px  3px solid black }",
    ];
    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    const html2 = fs.readFileSync("index.html", "utf-8");

    await page.setContent(html2, { waitUntil: "domcontentloaded" });

    // Inject each CSS style into the page
    for (const cssStyle of cssStyles) {
      await page.addStyleTag({ content: cssStyle });
    }

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    // Downlaod the PDF
    await page.pdf({
      path: "index.pdf",
      format: "A4",
    });

    // Close the browser instance
    await browser.close();
  };

  await puppeteerPdf();

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
            "info@3timpex.com",
            "octavedev01@gmail.com",
            data.user.email,
          ];
          const subject = "Export Readiness Report";
          const text = "Find result attached below";
          const attachments = [
            {
              filename: "index.pdf",
              // filename: "techsolutionstuff.pdf",
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
