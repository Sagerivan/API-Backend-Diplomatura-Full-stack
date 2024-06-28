import { EventModel } from "../model/events.js";

export class EventController {

  // Obtener todos los eventos 

  static async getAllEvents(req, res) {
    const events = await EventModel.getAll();
    events? res
          .status(200)
          .json({ info: { status: 200, message: "Ok" }, data: events })
      : res
          .status(404)
          .json({ info: { status: 404, message: "No events in database" } });
  }

 
  // Obtener un evento por id
 
  static async getById(req, res) {
    const { eventId } = req.params;
   
  
    const event = await EventModel.searchById(eventId);
    event
      ? res
          .status(200)
          .json({ info: { status: 200, message: "Ok" }, data: event })
      : res
          .status(404)
          .json({ info: { status: 404, message: "Event not found" } });
  }
 

  // Crear un evento

  static async createEvent(req, res) {
    const { tipoEvento, 
      descripcion,
      fecha, 
      horarioInicio, 
      horarioFin,
      capacidad, 
      organizador, 
      telefono, 
      precio,
      abono} = req.body;

 
    const eventCreated = await EventModel.createOne({
      tipoEvento, 
      descripcion,
      fecha, 
      horarioInicio, 
      horarioFin,
      capacidad, 
      organizador, 
      telefono, 
      precio,
      abono
   });
    eventCreated
      ? res.status(201).json({
          info: { status: 201, message: "event created ok" },
          data: {eventCreated},
        })
      : res
          .status(500)
          .json({ info: { status: 500, message: "Internal Server Error" } });
  }


  // Modificar un evento por su id

  static async updateById(req, res) {
    const { eventId } = req.params;
    const cuerpo = req.body;
  
    
    const isEvent = await EventModel.searchById(eventId);
    if (isEvent === null) {
      return res
        .status(404)
        .json({ info: { status: 404, message: "Evento no encontrado" } });
    }
   
    const updatedEvent = await EventModel.updateById(
      eventId,
      cuerpo
    );
    
    updatedEvent
      ? res.status(200).json({
          info: { status: 200, message: "Event successfully updated" },
        })
      : res
          .status(500)
          .json({ info: { status: 500, message: "Internal Server Error" } });
  }

  

// Borrar un evento

  static async deleteById(req, res) {
    const { eventId } = req.params;
  
    const info = await EventModel.deleteById(eventId);
    if (info > 0) {
       res.status(200).json({ status: 200, message: "Event deleted" });
    } else {
       res.status(404).json({ status: 404, message: "Event Not Found" });
    }
  }
}

