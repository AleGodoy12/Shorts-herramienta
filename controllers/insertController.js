const Shorts = require("../models/Shorts");

const insertController = {
  insertUsingBody: async function (req, res) {
    console.log(req.body);

    const {
      fecha,
      hora,
      id,
      site,
      accion,
      analista,
      videos_pendientes,
      duracion_de_video,
      datos_personales,
      contenido_de_loteria_concursos,
      contenido_ofensivo_discriminatorio,
      sin_audio,
      contenido_violento,
      contenido_politico,
      articulos_prohibidos,
      normativa_de_publicidad,
      informacion_engañosa,
      otro_idioma,
      contenido_sexual,
      contenido_horizontal,
      contenido_comparativo_o_difamatorio,
      propiedad_intelectual,
      menores_de_edad,
    } = req.body;

    console.log("req.body", req.body);

    try {
      await Shorts.create({
        fecha,
        hora,
        id,
        site,
        accion,
        analista,
        videos_pendientes,
        duracion_de_video,
        datos_personales,
        contenido_de_loteria_concursos,
        contenido_ofensivo_discriminatorio,
        sin_audio,
        contenido_violento,
        contenido_politico,
        articulos_prohibidos,
        normativa_de_publicidad,
        informacion_engañosa,
        otro_idioma,
        contenido_sexual,
        contenido_horizontal,
        contenido_comparativo_o_difamatorio,
        propiedad_intelectual,
        menores_de_edad,
      });
      res.status(200).json({
        status: 200,
        msg: "Inserción realizada",
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({
        status: 404,
        error: error.message,
      });
    }
  },
};

module.exports = insertController;
