const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      dificult:{
        type:DataTypes.INTEGER,
        validate:{
          min:1,
          max:5
        }
        },
      duration:{
        type:DataTypes.INTEGER,
      },  
     
      season:{
        type:DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull:false,
      },
    })
};