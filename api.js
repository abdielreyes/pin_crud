import express from "express";
import {
  createPin,
  getPins,
  validatePin,
  deletePin,
  deletePins,
  getUser,
} from "./controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/get_pins", (req, res) => {
  const pinsArray = getPins();
  const pins = [];
  pinsArray.forEach((e) => {
    pins.push(`${e.key} ${e.value}`);
  });
  res.send(pins);
});
router.get("/get_user", (req, res) => {
  const { pin } = req.query;
  if (pin) {
    const p = getUser(pin);
    return res.send(p);
  }
  return res.send("Favor de enviar un pin.");
});
router.get("/delete_pins", (req, res) => {
  deletePins();
  res.send("Base de datos eliminada");
});
router.get("/create_pin", (req, res) => {
  const { user, pin } = req.query;
  if (pin) {
    createPin(pin, user);
    res.send("PIN creado");
  }
});
router.get("/delete_pin", (req, res) => {
  const { pin } = req.query;
  if (pin) {
    deletePin(pin);
    return res.send("PIN eliminado");
  }
  return res.send("Error");
});
router.get("/validate_pin", (req, res) => {
  const { pin } = req.query;
  if (pin) {
    if (validatePin(pin)) {
      const u = getUser(pin);
      return res.send(u);
    }
  }
  return res.send(false);
});

export default router;
