const mongoose = require('mongoose')
 
 // Declare Schema
 const MLObjSchema = new mongoose.Schema(
   {
    "Inputs": {
      "input1": {
        "ColumnNames": [],
        "Values": [[]]
      }
    },
    "Global Variables": {}
   }, 
   { timestamps: true }
 );
 
 // Declare Model to mongoose with Schema
 const MLObj = mongoose.model('MLobj', MLObjSchema)
 
 // Export Model to be used in Node
 module.exports = mongoose.model('MLobj')