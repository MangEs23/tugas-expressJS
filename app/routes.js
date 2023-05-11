/* eslint-disable*/
const express = require('express');

const routes = express.Router();

routes.get('/biodata', (req, res) => {
  const nama = req.query.nama;
  const tempatLahir = req.query.tempat_lahir;
  const tanggalLahir = req.query.tanggal_lahir;
  const alamat = req.query.alamat;

  res.send({
    'nama': nama,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    'alamat': alamat
  })
});

routes.post('/biodata', (req, res) => {
    const nama = req.body.nama;
    const tempatLahir = req.body.tempat_lahir;
    const tanggalLahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;
  
    res.send({
      'nama': nama,
      'tempat-lahir': tempatLahir,
      'tanggal-lahir': tanggalLahir,
      'alamat': alamat
    })
  });

module.exports = routes;
