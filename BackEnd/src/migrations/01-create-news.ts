import {Model, QueryInterface, DataTypes} from 'sequelize'
import {DatabaseTypes} from '../../types/database'

export default {
  up(queryInterface:QueryInterface) {
    return queryInterface.createTable<Model<DatabaseTypes>>('registers', {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      start: {
        allowNull: false,
        type: DataTypes.STRING
      },
      end: {
        allowNull:false,
        type: DataTypes.STRING,
      },
      name: DataTypes.STRING,
      about: {
        allowNull: false,
        type: DataTypes.STRING
      },
      identifier: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      locate: DataTypes.STRING,
      action: DataTypes.STRING,
      age: DataTypes.STRING,
      approved:DataTypes.STRING,
      linkAbout: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      potentialAction: DataTypes.STRING,
      keyWord: DataTypes.STRING,
      
    })
  },

  down(queryInterface:QueryInterface) {
    return queryInterface.dropTable('news')
  }
}