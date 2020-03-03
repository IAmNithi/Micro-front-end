import express from "express";
import Home from './home';
import AboutMe from './aboutme';

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(router);
  res.send(Home);
});

router.get("/aboutme", async (req, res) => {
  console.log(router);
  res.send(AboutMe);
});

router.get('/components/:id', function(req, res) {
  console.log('printing param', req.params.id);
  res.send('The id you specified is ' + req.params.id);
});

export default router;