import { Router } from "express";
export const router = Router();
import { EventController } from "../controller/events.js";

// Obtener todos los eventos 
router.get("/", EventController.getAllEvents);

// Obtener un evento por id
router.get("/:eventId", EventController.getById);

// Crear un evento
router.post("/", EventController.createEvent);

// Modificar un evento por su id
router.patch("/:eventId", EventController.updateById);

// Borrar un evento
router.delete("/:eventId", EventController.deleteById);
