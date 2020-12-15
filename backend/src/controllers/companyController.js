const companiesCollection = require("../models/companiesSchema");

const getAll = (req, res) => {
    companiesCollection.find((error, cos) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(cos);
    })
}

const getById = (req, res) => {
    id = req.params.id;

    companiesCollection.findById(id, (error, co) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(co !== null)
                return res.status(200).send(co);
            else
                return res.status(404).send({ message: "Empresa não existe na base de dados."});
        }
    })
}

const add = (req, res) => {
    const coBody = req.body;
    const co = new companiesCollection(coBody);

    co.save((error) => {
        if(error)
            return res.status(400).send(error);
        else 
            return res.status(200).send(co);
    })
}

const update = (req, res) => {
    const id = req.query.id;
    const coBody = req.body;
    const update = { new: true };

    companiesCollection.findByIdAndUpdate(
        id,
        coBody,
        update,
        (error, co) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(co)
                    return res.status(200).send(co); 
                else 
                    return res.status(404).send({ message: "Empresa não existe na base de dados."});
            }
        })
}

const deleteCompany = (req, res) => {
    const id = req.query.id;

    companiesCollection.findByIdAndDelete(id, (error, co) => {
        if(error)
            return res.status(500).send(error);
        else {
            if(co)
                return res.status(200).send({ message: "Empresa deletada."});
            else
                return res.status(404).send({ message: "Empresa não existe na base de dados."});
        }
    })
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteCompany
}