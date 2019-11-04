const { Model, DataTypes } = require("sequelize");

class Patologiasmentai extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      descricao: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Patologiasmentai;