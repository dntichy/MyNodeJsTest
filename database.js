const Sequelize = require('sequelize');

if(process.env.NODE_ENV == "dev") {
    DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/postgres';
}
else if (process.env.NODE_ENV == "test"){
    DATABASE_URL = 'postgres://postgres:postgres@postgres-docker:5432/postgres';

} else {

    DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/postgres';
}

const database = new Sequelize(DATABASE_URL);

module.exports = database;