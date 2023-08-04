"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("users", [
      {
        first_name: "john",
        last_name: "doe",
        email: "johndoe@test.com",
        username: "johndoe",
        password:
          "$2b$10$y.0nlo1VMB9OI0498ocGz.LQQnqDoBTbR86SAfdwntfvhyWsoIH9q",
        role: "Admin",
      },
      {
        first_name: "Nur Cholis",
        last_name: "Majid",
        email: "testme@test.com",
        username: "teestme",
        password:
        "$2b$10$Ba3JfcpuAMgxtOdPzy4Kve4tRrxFEh4wiE/PQeulX0.1V1KWmo5N6",
        role: "Customer",
      },
      {
        first_name: "buyer",
        last_name: "buyer",
        email: "buyer@buyer.com",
        username: "buyermu",
        password:
          "$2b$10$3FzDhMWRbd3p4X.FykhYPeXPlfW9tSefYXnWQtiKRiJUHxQOnaW3q",
        role: "Customer",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
