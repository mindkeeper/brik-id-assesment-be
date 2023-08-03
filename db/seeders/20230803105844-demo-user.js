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
        id: 1,
        first_name: "john",
        last_name: "doe",
        email: "johndoe@test.com",
        username: "johndoe",
        password:
          "$2b$10$y.0nlo1VMB9OI0498ocGz.LQQnqDoBTbR86SAfdwntfvhyWsoIH9q",
        role: "Admin",
        created_at: "2023-08-02 07:24:35.064+00",
        updated_at: "2023-08-02 07:24:35.064+00",
        deleted_at: null,
      },
      {
        id: 2,
        first_name: "Nur Cholis",
        last_name: "Majid",
        email: "testme@test.com",
        username: "teestme",
        password:
          "$2b$10$Ba3JfcpuAMgxtOdPzy4Kve4tRrxFEh4wiE/PQeulX0.1V1KWmo5N6",
        role: "Customer",
        created_at: "2023-08-02 14:48:50.656+00",
        updated_at: "2023-08-02 14:48:50.656+00",
        deleted_at: null,
      },
      {
        id: 5,
        first_name: "buyer",
        last_name: "buyer",
        email: "buyer@buyer.com",
        username: "buyermu",
        password:
          "$2b$10$3FzDhMWRbd3p4X.FykhYPeXPlfW9tSefYXnWQtiKRiJUHxQOnaW3q",
        role: "Customer",
        created_at: "2023-08-02 15:01:43.117+00",
        updated_at: "2023-08-02 15:01:43.117+00",
        deleted_at: null,
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
