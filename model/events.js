import { db } from "../dbConnection.js";

export class EventModel {
  
  // Obtener todos los eventos 

  static async getAll() {
    const [events, _info] = await db.query(
      `SELECT * from eventos`
    );
  
    return events.length ? events : null;
  }


  //  Obtener un evento por id

  static async searchById(eventId) {
    const [event, _info] = await db.query(
      `SELECT * from eventos WHERE id = ?`,
      [eventId]
    );
    
    return event.length ? event : null;
  }


  // Crear un evento

  static async createOne(event) {
    const { tipoEvento, 
      descripcion,
      fecha, 
      horarioInicio, 
      horarioFin,
      capacidad, 
      organizador, 
      telefono, 
      precio,
      abono } = event;
    const [result, info] = await db.query(
      `
      INSERT INTO eventos (tipo_evento, 
      descripcion,
      fecha, 
      hora_inicio, 
      hora_fin,
      capacidad, 
      organizador, 
      telefono_organizador, 
      precio,
      estado_abono) VALUES 
      (?,?,?,?,?,?,?,?,?,?)
      `,
      [tipoEvento, 
        descripcion,
        fecha, 
        horarioInicio, 
        horarioFin,
        capacidad, 
        organizador, 
        telefono, 
        precio,
        abono]
    );

    return result ? result : null;
  }

  // Modificar un evento por su id de forma parcial

  static async updateById(id, partialEvent) {
   
   let partialQuery = "";
    for (const key in partialEvent) {
      partialQuery += `${key} = '${partialEvent[key]}', `;
    }

    partialQuery = partialQuery.slice(0, -2);
    
    const [info] = await db.query(
      `UPDATE eventos SET ${partialQuery} WHERE id = ?`,
      [id]
    );

    return info.affectedRows;
  }

  // Borrar un evento

  static async deleteById(eventId) {
    const [info] = await db.query(
      `DELETE from eventos WHERE id = ? `,
      [eventId]
    );
    return info.affectedRows;
  }
}

