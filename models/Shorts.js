const { DataTypes } = require("sequelize");

const sequelize = require("../database/conexion.js");

const Shorts = sequelize.define(
  "Shorts",
  {
    id_registro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.STRING,
    },
    hora: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.STRING,
      unique: true,
    },
    site: {
      type: DataTypes.STRING,
    },
    accion: {
      type: DataTypes.STRING,
    },
    analista: {
      type: DataTypes.STRING,
    },
    videos_pendientes: {
      type: DataTypes.INTEGER,
    },
    duracion_de_video: {
      type: DataTypes.STRING,
      unique: true,
    },
    datos_personales: {
      type: DataTypes.BOOLEAN,
    },
    contenido_de_loteria_concursos: {
      type: DataTypes.BOOLEAN,
    },
    contenido_ofensivo_discriminatorio: {
      type: DataTypes.BOOLEAN,
    },
    sin_audio: {
      type: DataTypes.BOOLEAN,
    },
    contenido_violento: {
      type: DataTypes.BOOLEAN,
    },
    contenido_politico: {
      type: DataTypes.BOOLEAN,
    },
    articulos_prohibidos: {
      type: DataTypes.BOOLEAN,
    },
    normativa_de_publicidad: {
      type: DataTypes.BOOLEAN,
    },
    informacion_engañosa: {
      type: DataTypes.BOOLEAN,
    },
    otro_idioma: {
      type: DataTypes.BOOLEAN,
    },
    contenido_sexual: {
      type: DataTypes.BOOLEAN,
    },
    contenido_horizontal: {
      type: DataTypes.BOOLEAN,
    },
    contenido_comparativo_o_difamatorio: {
      type: DataTypes.BOOLEAN,
    },
    propiedad_intelectual: {
      type: DataTypes.BOOLEAN,
    },
    menores_de_edad: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

/* async function crearTabla() {
  
  await Shorts.sync();
}
crearTabla(); */

module.exports = Shorts;
