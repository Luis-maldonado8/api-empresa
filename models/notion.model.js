import mongoose from 'mongoose';

const notionSchema = new mongoose.Schema(
  {
    nombreWorkspace: {
      type: String,
      required: [true, 'El nombre del workspace es obligatorio'],
      trim: true,
      minlength: [3, 'El nombre del workspace debe tener al menos 3 caracteres']
    },
    tipoPlan: {
      type: String,
      required: [true, 'El tipo de plan es obligatorio'],
      trim: true,
      enum: {
        values: ['Free', 'Plus', 'Business', 'Enterprise'],
        message: 'El tipo de plan debe ser Free, Plus, Business o Enterprise'
      }
    },
    categoriaUso: {
      type: String,
      required: [true, 'La categoria de uso es obligatoria'],
      trim: true,
      enum: {
        values: ['Educacion', 'Empresa', 'Productividad', 'Proyectos', 'Personal'],
        message: 'La categoria debe ser Educacion, Empresa, Productividad, Proyectos o Personal'
      }
    },
    descripcion: {
      type: String,
      required: [true, 'La descripcion es obligatoria'],
      trim: true,
      minlength: [10, 'La descripcion debe tener al menos 10 caracteres']
    },
    cantidadPaginas: {
      type: Number,
      required: [true, 'La cantidad de paginas es obligatoria'],
      min: [1, 'Debe existir al menos una pagina']
    },
    miembrosEquipo: {
      type: Number,
      required: [true, 'La cantidad de miembros es obligatoria'],
      min: [1, 'Debe existir al menos un miembro']
    },
    integraciones: {
      type: [String],
      default: []
    },
    plantillaPrincipal: {
      type: String,
      required: [true, 'La plantilla principal es obligatoria'],
      trim: true
    },
    estado: {
      type: String,
      required: [true, 'El estado es obligatorio'],
      trim: true,
      enum: {
        values: ['Activo', 'En revision', 'Archivado'],
        message: 'El estado debe ser Activo, En revision o Archivado'
      },
      default: 'Activo'
    },
    fechaCreacionWorkspace: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Notion = mongoose.model('Notion', notionSchema);

export default Notion;
