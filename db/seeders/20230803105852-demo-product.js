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
    return await queryInterface.bulkInsert("products", [
      {
        id: 3,
        name: "potabee Seaweed",
        description: "potato enak",
        sku: "PTO",
        weight: 200,
        width: 50,
        length: 50,
        height: 50,
        price: 1000,
        image:
          "https://res.cloudinary.com/dedmbkp9a/image/upload/v1690962148/products/818410ee-db3f-4e70-83f9-81296e4cf01c.jpg",
        category_id: 1,
        created_at: "2023-08-02 07:42:29.376+00",
        updated_at: "2023-08-02 07:42:29.376+00",
        deleted_at: null,
      },
      {
        id: 5,
        name: "Alpenlibe lollipop",
        description: "tipe barang lolipop",
        sku: "ALPEN",
        weight: 200,
        width: 50,
        length: 50,
        height: 50,
        price: 2000,
        image:
          "https://res.cloudinary.com/dedmbkp9a/image/upload/v1690965349/products/773bb505-fa8e-40d4-8402-c37f47f43f79.jpg",
        category_id: 3,
        created_at: "2023-08-02 08:35:50.386+00",
        updated_at: "2023-08-02 08:35:50.386+00",
        deleted_at: null,
      },
      {
        id: 6,
        name: "m & m",
        description: "m & m enak banget",
        sku: "M&M",
        weight: 200,
        width: 50,
        length: 50,
        height: 50,
        price: 15000,
        image:
          "https://res.cloudinary.com/dedmbkp9a/image/upload/v1690965409/products/d333da3d-3355-4f33-a3ab-22afb4c56c86.jpg",
        category_id: 3,
        created_at: "2023-08-02 08:36:50.355+00",
        updated_at: "2023-08-02 08:36:50.355+00",
        deleted_at: null,
      },
      {
        id: 7,
        name: "pocari sweat",
        description: "menambah ion tubuhmu",
        sku: "POCARI",
        weight: 200,
        width: 50,
        length: 50,
        height: 50,
        price: 5000,
        image:
          "https://res.cloudinary.com/dedmbkp9a/image/upload/v1690965501/products/62e4be3f-b901-4164-b162-569bfc8b4fa0.jpg",
        category_id: 2,
        created_at: "2023-08-02 08:38:22.263+00",
        updated_at: "2023-08-02 08:38:22.263+00",
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
