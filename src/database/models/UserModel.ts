import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define('NOME_TABELA', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }

  //demais campos da tabela
})