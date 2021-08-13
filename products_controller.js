// getDb = (req) => req.app.get('db');

const create = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.create_product()
        .then(() => {
            res.sendStatus(200)
        })
        .catch((e) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })
            console.log(e)
        })
}

const getOne = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_product()
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((e) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })
            console.log(e)
        })
}

const getAll = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((e) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })
            console.log(e)
        })
}

const update = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.update_product()
        .then(() => {
            res.sendStatus(200)
        })
        .catch((e) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })
            console.log(e)
        })
}

const deleteOne = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.delete_product()
        .then(() => {
            res.sendStatus(200)
        })
        .catch((e) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" })
            console.log(e)
        })
}



module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteOne
}