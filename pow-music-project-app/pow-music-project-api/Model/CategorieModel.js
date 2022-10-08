import { Sequelize } from "sequelize";
import dbConn from "../Config/dbConfig.js";

const { DataTypes } = Sequelize;

const Categorie = dbConn.define('categorie', {
    idcategorie: {
        type: DataTypes.INT,
        primaryKey: true
    },
    categorieName: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN
    }
},
{
    freezeTableName: true,
    updatedAt: false,
    createdAt: false
});

export default Categorie;