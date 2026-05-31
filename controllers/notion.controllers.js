import Notion from '../models/notion.model.js';

export const crearNotion = async (req, res) => {
  try {
    const nuevoRegistro = await Notion.create(req.body);

    res.status(201).json({
      mensaje: 'Registro de Notion creado correctamente',
      data: nuevoRegistro
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al crear el registro de Notion',
      error: error.message
    });
  }
};

export const obtenerNotions = async (req, res) => {
  try {
    const registros = await Notion.find().sort({ createdAt: -1 });

    res.status(200).json({
      mensaje: 'Registros de Notion obtenidos correctamente',
      total: registros.length,
      data: registros
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los registros de Notion',
      error: error.message
    });
  }
};

export const obtenerNotionPorId = async (req, res) => {
  try {
    const registro = await Notion.findById(req.params.id);

    if (!registro) {
      return res.status(404).json({
        mensaje: 'Registro de Notion no encontrado'
      });
    }

    res.status(200).json({
      mensaje: 'Registro de Notion obtenido correctamente',
      data: registro
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el registro de Notion',
      error: error.message
    });
  }
};

export const actualizarNotion = async (req, res) => {
  try {
    const registroActualizado = await Notion.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!registroActualizado) {
      return res.status(404).json({
        mensaje: 'Registro de Notion no encontrado para actualizar'
      });
    }

    res.status(200).json({
      mensaje: 'Registro de Notion actualizado correctamente',
      data: registroActualizado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al actualizar el registro de Notion',
      error: error.message
    });
  }
};

export const eliminarNotion = async (req, res) => {
  try {
    const registroEliminado = await Notion.findByIdAndDelete(req.params.id);

    if (!registroEliminado) {
      return res.status(404).json({
        mensaje: 'Registro de Notion no encontrado para eliminar'
      });
    }

    res.status(200).json({
      mensaje: 'Registro de Notion eliminado correctamente',
      data: registroEliminado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar el registro de Notion',
      error: error.message
    });
  }
};
