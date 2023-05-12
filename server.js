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
app.use(cors());

const connectDB = (url) => {
  return mongoose.connect(url);
};

app.get("/test", (req, res) => {
  res.send("<h1>Welcome to export readiness</h1>");
});

app.get("/erp/myAdmin", (req, res) => {

  res.send('<button><a href="https://erp-admin.vercel.app">GO to Admin</a></button>');
})


// Serve static files from the 'build' directory for the root route
app.use("/", express.static(__dirname + "/build"));

// Serve static files from the 'admin' directory for the '/admin' route
app.use("/admin", express.static(__dirname + "/Admin"));

// Serve static files from the public folder
app.use(express.static("public"));


const allowedOrigins = ["https://erp-admin.vercel.app"];

// Do you want to skip the checking of the origin and grant authorization?
const skipTheCheckingOfOrigin = true;

// MIDDLEWARES
app.use(
  cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        // or allow all origines (skipTheCheckingOfOrigin === true) 
        if (!origin || skipTheCheckingOfOrigin === true) {
          return callback(null, true);
        }

        // -1 means that the user's origin is not in the array allowedOrigins
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
                "The CORS policy for this site does not " +
                "allow access from the specified Origin.";

            return callback(new Error(msg), false);
        }
        // origin is in the array allowedOrigins so authorization is granted
        return callback(null, true);
    },
  })
);


app.use("/users", router);

app.post("/create-pdf", async (req, res) => {
  const { data } = req.body;
  const html = pdfTemplate(data);
  
  const { firstName, lastName, email, phone, companyName, Products } = data.user;

  fs.writeFileSync("index.html", html);
  // const html2 = fs.readFileSync("index.html", "utf8");

  const puppeteerPdf = async () => {
    // Create a browser instance
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      timeout: 10000,
    });

    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    const html2 = fs.readFileSync("index.html", "utf-8");

    await page.setContent(html2, { waitUntil: "domcontentloaded" });

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
            "patoctave99@gmail.com",
            "info@3timpex.com",
            "octavedev01@gmail.com",
            data.user.email,
          ];
          const subject = "Export Readiness Report";
          const text = `

          Hy ${firstName} ${lastName}, Kindly find the result of your export readiness test attached below.
                        
          Thank you.
          `;
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

  user.cat1 = data.cat1 
  user.cat2 = data.cat2 
  user.cat3 = data.cat3 
  user.cat4 = data.cat4 
  user.cat5 = data.cat5 
  user.cat6 = data.cat6 
  user.cat7 = data.cat7 
  user.cat8 = data.cat8 
  user.cat9 = data.cat9 
  user.cat10 = data.cat10 
  user.cat11 = data.cat11
  user.cat12 = data.cat12 
  user.cat13 = data.cat13
  user.cat14 = data.cat14
  user.cat15 = data.cat15
  user.totalAveragePercentage = data.totalAveragePercentage
  user.totalResult = data.totalResult

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
