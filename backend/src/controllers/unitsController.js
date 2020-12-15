const unitsCollection = require("../models/unitsSchema");

const getAll = (req, res) => {
    unitsCollection.find((error, users) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(users);
    })
}

const getById = (req, res) => {
    id = req.params.id;

    unitsCollection.findById(id, (error, user) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(user !== null)
                return res.status(200).send(user);
            else
                return res.status(404).send({ message: "Unidade não existe na base de dados."});
        }
    })
}

const addUser = (req, res) => {
    const userBody = req.body;
    const user = new unitsCollection(userBody);

    user.save((error) => {
        if(error)
            return res.status(400).send(error);
        else 
            return res.status(200).send(user);
    })
}

const updateUser = (req, res) => {
    const id = req.query.id;
    const userBody = req.body;
    const update = { new: true };

    unitsCollection.findByIdAndUpdate(
        id,
        userBody,
        update,
        (error, user) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(user)
                    return res.status(200).send(user); 
                else 
                    return res.status(404).send({ message: "Unidade não existe na base de dados."});
            }
        })
}

const deleteUser = (req, res) => {
    const id = req.query.id;

    unitsCollection.findByIdAndDelete(id, (error, user) => {
        console.log(user)
        if(error)
            return res.status(500).send(error);
        else {
            if(user)
                return res.status(200).send({ message: "Unidade deletada."});
            else
                return res.status(404).send({ message: "Unidade não existe na base de dados."});
        }
    })
}

module.exports = {
    getAll,
    getById,
    addUser,
    updateUser,
    deleteUser
}