"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        return queryInterface.bulkInsert("Roles", [
            {
                role: "Admin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                role: "Owner",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                role: "Renter",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    }
};
