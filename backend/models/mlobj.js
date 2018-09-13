const mongoose = require('mongoose')
 
 // Declare Schema
 const MLObjSchema = new mongoose.Schema(
   {
     year: { type: Number },
     month: { type: String },
     cases: { type: Number },
     IR: { type: Number },
     region: { type: String }
   }, 
   { timestamps: true }
 );
 
 // Declare Model to mongoose with Schema
 const MLObj = mongoose.model('MLobj', MLObjSchema)
 
 // Export Model to be used in Node
 module.exports = mongoose.model('MLobj')