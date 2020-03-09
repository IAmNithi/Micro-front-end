import express from "express";
import Home from './home';
import AboutMe from './aboutme';
import HeaderComponent from './header';
import BodyComponent from './body';
import footerComponent from './footer';

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(Home);
});

router.get("/about", async (req, res) => {
  res.send(AboutMe);
});

router.get("/headerComponent", async (req, res) => {
  res.send(HeaderComponent);
});

router.get("/bodyComponent", async (req, res) => {
  res.send(BodyComponent);
});

router.get("/footerComponent", async (req, res) => {
  res.send(footerComponent);
});

export default router;