import express from "express";
import Header from "../Client/Header/header";
import Body from "../Client/Body/body";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
  <html>
  <head><title>Micro Front Ends</title></head>
  <body>
  <div>
  <div id="headerCmp">{{{headerCmp}}}</div>
  <script src="Header/header.js" charset="utf-8"></script>
  </div>
  <div>
  <div id="bodyCmp">{{{bodyCmp}}}</div>
  <script src="Body/body.js" charset="utf-8"></script>
  </div>
  <script src="vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const headComp = renderToString(<Header />);
    const bodyComp = renderToString(<Body />);
  const htmlToSend = hbsTemplate({ headerCmp: headComp, bodyCmp: bodyComp });
  res.send(htmlToSend);
});

export default router;