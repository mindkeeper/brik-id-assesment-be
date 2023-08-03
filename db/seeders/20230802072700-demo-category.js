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
    return await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "Snack",
        created_at: "2023-08-02 07:28:50.75011+00",
        updated_at: "2023-08-02 07:28:50.75011+00",
      },
      {
        id: 2,
        name: "Drink",
        created_at: "2023-08-02 07:28:50.75011+00",
        updated_at: "2023-08-02 07:28:50.75011+00",
      },
      {
        id: 3,
        name: "Candy",
        created_at: "2023-08-02 07:28:50.75011+00",
        updated_at: "2023-08-02 07:28:50.75011+00",
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
