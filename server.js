<<<<<<< HEAD
//1. Importar la libreria de express
// const express = require('express');
import express from "express";
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js';
import mongoose from "mongoose";
=======
import mongoose from 'mongoose';
import app from './app.js';
>>>>>>> 3ee1dd3fae7e46aa45327091812f8b4027e9bd94

const { MONGODB_URI, PORT = 3000 } = process.env;

async function main() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Mongo conectado');
    const server = app.listen(PORT, () => console.log(`API http://localhost:${PORT}`));

    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      server.close(() => process.exit(0));
    });
  } catch (err) {
    console.error('Error de inicio:', err.message);
    process.exit(1);
  }
}

main();
