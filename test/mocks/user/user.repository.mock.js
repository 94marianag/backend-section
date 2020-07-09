const jestConfig = require("../../../jest.config");

module.exports = {
    grt: jest.fn(),
    getAttl: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    getUserByUsername: jest.fn(),
};
