const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    tag_id: {
      type: DataTypes.INTEGER,
    },

    tag_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);
module.exports = ProductTag;
