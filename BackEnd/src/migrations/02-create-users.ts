import {Model, DataType, QueryInterface, DataTypes} from 'sequelize'
import {Users} from '../../types/database'

export default {
  up(queryInterface:QueryInterface) {
    return queryInterface.createTable<Model<Users>>('users', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull:false,
        type:DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING
      }
    })
  },
  down(queryInterface:QueryInterface) {
    return queryInterface.dropTable('users')
  }
}