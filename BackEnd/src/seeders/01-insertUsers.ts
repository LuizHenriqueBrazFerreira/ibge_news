import {QueryInterface} from 'sequelize'

export default {
  up: async(queryInterface:QueryInterface) => {
    return queryInterface.bulkInsert('users',[{
      id:1,
      name: 'fsmsss',
      email: 'fsmsss@gmail.com',
      password: 'Fsmsss2023!!',
      role: 'admin',
    }],{})
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('users', {})
  }
}