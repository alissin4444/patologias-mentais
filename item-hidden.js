// the name of this archive is ".sequelizerc"

// paste this content
const path = require("path");

module.exports = {
    config: path.resolve(__dirname, "src", "config", "database.js"),
    "migrations-path": path.resolve(__dirname, "src", "database", "migrations")
};
