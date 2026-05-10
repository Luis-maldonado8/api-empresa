import mongoose from 'mongoose';

const notionSchema = new mongoose.Schema(
  {
    nombreEmpresa: {
      type: String,
      required: [true, 'El nombre de la empresa es obligatorio'],
      trim: true,
      default: 'Notion'
    },
    industria: {
      type: String,
      required: [true, 'La industria es obligatoria'],
      trim: true
    },
    sede: {
      type: String,
      required: [true, 'La sede es obligatoria'],
      trim: true
    },
    pais: {
      type: String,
      required: [true, 'El pais es obligatorio'],
      trim: true
    },
    descripcion: {
      type: String,
      required: [true, 'La descripcion es obligatoria'],
      trim: true
    },
    sitioWeb: {
      type: String,
      required: [true, 'El sitio web es obligatorio'],
      trim: true
    },
    numeroEmpleados: {
      type: Number,
      required: [true, 'El numero de empleados es obligatorio'],
      min: [0, 'El numero de empleados no puede ser negativo']
    },
    ingresosAnuales: {
      type: Number,
      required: [true, 'Los ingresos anuales son obligatorios'],
      min: [0, 'Los ingresos anuales no pueden ser negativos']
    },
    estado: {
      type: String,
      enum: ['Activa', 'Inactiva', 'En expansion', 'En expansión'],
      default: 'Activa'
    },
    fechaFundacion: {
      type: Date,
      required: [true, 'La fecha de fundacion es obligatoria']
    }
  },
  {
    timestamps: true
  }
);

const Notion = mongoose.model('Notion', notionSchema);

export default Notion;
