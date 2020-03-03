import Header from "../../Client/Header/header";
import Body from "../../Client/Body/body";
import Footer from "../../Client/Footer/footer";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

const theHtml = `
  <html>
  <head>
  <title>Micro Front Ends</title>
  <style>
  * {box-sizing: border-box;}
  body { 
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>
  <div id="header">
  <div id="headerCmp">{{{headerCmp}}}</div>
  <script src="Header/header.js" charset="utf-8"></script>
  </div>
  <div id="body">
  <div id="bodyCmp">{{{bodyCmp}}}</div>
  <script src="Body/body.js" charset="utf-8"></script>
  </div>
  <div id="footer">
  <div id="footerCmp">{{{footerCmp}}}</div>
  <script src="Footer/footer.js" charset="utf-8"></script>
  </div>
  <script src="vendor.js" charset="utf-8"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const headComp = renderToString(<Header />);
  const bodyComp = renderToString(<Body />);
  const footerCmp = renderToString(<Footer />);
  const Home = hbsTemplate({
    headerCmp: headComp,
    bodyCmp: bodyComp,
    footerCmp: footerCmp
  });

  export default Home;