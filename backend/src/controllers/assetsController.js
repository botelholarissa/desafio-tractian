const assetsCollection = require("../models/assetsSchema");

const getAll = (req, res) => {
    assetsCollection.find((error, assets) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(assets);
    })
}

const getById = (req, res) => {
    id = req.params.id;

    assetsCollection.findById(id, (error, assets) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(assets !== null)
                return res.status(200).send(assets);
            else
                return res.status(404).send({ message: "Ativo não existe na base de dados."});
        }
    })
}

const add = (req, res) => {
    const assetsBody = req.body;
    const assets = new assetsCollection(assetsBody);

    assets.save((error) => {
        if(error)
            return res.status(400).send(error);
        else 
            return res.status(200).send(assets);
    })
}

const update = (req, res) => {
    const id = req.query.id;
    const assetsBody = req.body;
    const update = { new: true };

    assetsCollection.findByIdAndUpdate(
        id,
        assetsBody,
        update,
        (error, assets) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(assets)
                    return res.status(200).send(assets); 
                else 
                    return res.status(404).send({ message: "Ativo não existe na base de dados."});
            }
        })
}

const deleteAssets = (req, res) => {
    const id = req.query.id;

    assetssCollection.findByIdAndDelete(id, (error, assets) => {
        if(error)
            return res.status(500).send(error);
        else {
            if(assets)
                return res.status(200).send({ message: "Ativo deletado."});
            else
                return res.status(404).send({ message: "Ativo não existe na base de dados."});
        }
    })
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteAssets
}