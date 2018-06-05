const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffee').select();
    },
    read(id){
        return database('coffee').select().where("id", id).first();
    },
    create(coffee){
        return database('coffee').insert(coffee).returning('*').then(record => record[0]);
    },
    update(id, coffee){
        return database('coffee').where("id", id).update(coffee, "*").then(record => record[0]);
    },
    delete(id){
        return database('coffee').where("id", id).del();
    }
};
