const unitsCollection = require("../models/unitsSchema");

const getAll = (req, res) => {
    unitsCollection.find((error, units) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(units);
    })
}

const getById = (req, res) => {
    id = req.params.id;

    unitsCollection.findById(id, (error, unit) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(unit !== null)
                return res.status(200).send(unit);
            else
                return res.status(404).send({ message: "Unidade não existe na base de dados."});
        }
    })
}

const add = (req, res) => {
    const unitBody = req.body;
    const unit = new unitsCollection(unitBody);

    unit.save((error) => {
        if(error)
            return res.status(400).send(error);
        else 
            return res.status(200).send(unit);
    })
}

const update = (req, res) => {
    const id = req.query.id;
    const unitBody = req.body;
    const update = { new: true };

    unitsCollection.findByIdAndUpdate(
        id,
        unitBody,
        update,
        (error, unit) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(unit)
                    return res.status(200).send(unit); 
                else 
                    return res.status(404).send({ message: "Unidade não existe na base de dados."});
            }
        })
}

const deleteUnit = (req, res) => {
    const id = req.query.id;

    unitsCollection.findByIdAndDelete(id, (error, unit) => {
        if(error)
            return res.status(500).send(error);
        else {
            if(unit)
                return res.status(200).send({ message: "Unidade deletada."});
            else
                return res.status(404).send({ message: "Unidade não existe na base de dados."});
        }
    })
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteUnit
}