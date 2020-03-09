import express from "express";
import Home from './home';
import AboutMe from './aboutme';
import HeaderComponent from './header';
import BodyComponent from './body';

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(Home);
});

router.get("/aboutme", async (req, res) => {
  res.send(AboutMe);
});

router.get("/header", async (req, res) => {
  res.send(HeaderComponent);
});

router.get("/body", async (req, res) => {
  res.send(BodyComponent);
});

router.get("/footer", async (req, res) => {
  res.send(AboutMe);
});

export default router;