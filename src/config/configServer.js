const {connect} = require('mongoose')

const url = "mongodb+srv://AlvaroVargas:AlvaroV04@comision39750.mongodb.net/Ecommerce?retryWrites=true&w=majority"

module.exports = {
  connectDB: ()=>{
    connect(url)
    console.log('Base de datos conectada')
  }
}