const usersCollection = require("../models/usersSchema");

const getAll = (req, res) => {
    usersCollection.find((error, users) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(users);
    })
}

module.exports = {
    getAll
}