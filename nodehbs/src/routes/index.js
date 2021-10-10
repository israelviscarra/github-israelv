const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // anire a la BBDD, agafaré el que m'interessi,
  // crearé un objecte... i el passaré al render

  res.render("index", {
    txt: "lorem ipsum sit amet HOME",
    title: "Home",
    active: { Home: true },
  });
});

router.get("/contacte", (req, res) => {
  res.render("contacte", {
    txt: "lorem ipsum sit amet CONTACTE",
    title: "Contacte",
    active: { Contacte: true },
  });
});

router.get("/quienes_somos", (req, res) => {
  res.render("quienes_somos", {
    txt: "lorem ipsum sit amet quienes somos",
    title: "quienes somos?",
    active: { quienes_somos: true },
  });
});

router.get("/Soporte", (req, res) => {
  res.render("Soporte", {
    txt: "lorem ipsum sit amet Soporte",
    title: "Soporte",
    active: { Soporte: true },
  });
});

router.get("/Tienda", (req, res) => {
  res.render("Tienda", {
    txt: "lorem ipsum sit amet Tienda",
    title: "Tienda",
    active: { Tienda: true },
  });
});

module.exports = router;
