import mongoose from 'mongoose';
import Notion from '../models/notion.model.js';

const getAllNotionCompanies = async (req, res) => {
  try {
    const registros = await Notion.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: registros.length,
      data: registros
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los registros de Notion'
    });
  }
};

const getNotionCompanyById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID invalido'
      });
    }

    const registro = await Notion.findById(id);

    if (!registro) {
      return res.status(404).json({
        success: false,
        message: 'Registro de Notion no encontrado'
      });
    }

    return res.status(200).json({
      success: true,
      data: registro
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener el registro de Notion'
    });
  }
};

const postNotionCompany = async (req, res) => {
  try {
    const nuevoRegistro = new Notion(req.body);
    const registroGuardado = await nuevoRegistro.save();

    return res.status(201).json({
      success: true,
      message: 'Registro de Notion creado correctamente',
      data: registroGuardado
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Error de validacion',
        errors: Object.values(error.errors).map((err) => err.message)
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Error al crear el registro de Notion'
    });
  }
};

const putNotionCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID invalido'
      });
    }

    const registroActualizado = await Notion.findByIdAndUpdate(id, req.body, {
      returnDocument: 'after',
      runValidators: true
    });

    if (!registroActualizado) {
      return res.status(404).json({
        success: false,
        message: 'Registro de Notion no encontrado'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Registro de Notion actualizado correctamente',
      data: registroActualizado
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Error de validacion',
        errors: Object.values(error.errors).map((err) => err.message)
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Error al actualizar el registro de Notion'
    });
  }
};

const deleteNotionCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID invalido'
      });
    }

    const registroEliminado = await Notion.findByIdAndDelete(id);

    if (!registroEliminado) {
      return res.status(404).json({
        success: false,
        message: 'Registro de Notion no encontrado'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Registro de Notion eliminado correctamente',
      data: registroEliminado
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar el registro de Notion'
    });
  }
};

const getNotionCompaniesByCountry = async (req, res) => {
  try {
    const { pais } = req.params;

    const registros = await Notion.find({
      pais: { $regex: pais, $options: 'i' }
    });

    return res.status(200).json({
      success: true,
      count: registros.length,
      data: registros
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al filtrar registros de Notion por pais'
    });
  }
};

export {
  getAllNotionCompanies,
  getNotionCompanyById,
  postNotionCompany,
  putNotionCompany,
  deleteNotionCompany,
  getNotionCompaniesByCountry
};
