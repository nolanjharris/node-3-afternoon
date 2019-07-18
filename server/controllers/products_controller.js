const create = (req, res) => {
    const { name, description, price, image_url } = req.body;
    const db = req.app.get('db');
    db.create_product([name, description, price, image_url]).then(() => {
        res.sendStatus(200);
    }).catch(err => res.status(500).send({ errorMessage: "Oops, something messed up!" }));
}

const getOne = (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.read_product(id).then(product => {
        res.status(200).json(product);
    }).catch(err => res.status(500).send({ errorMessage: "Oops, something messed up!" }));
}

const getAll = (req, res) => {
    const db = req.app.get('db');
    db.read_products().then(products => {
        res.status(200).json(products);
    }).catch(err => res.status(500).send({ errorMessage: "Oops, something messed up!" }));
}

const update = (req, res) => {
    const { id } = req.params;
    const { desc } = req.query;
    const db = req.app.get('db');
    db.update_product([id, desc]).then(() => {
        res.sendStatus(200);
    }).catch(err => res.status(500).send({ errorMessage: "Oops, something messed up!" }));
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.delete_product(id).then(() => {
        res.sendStatus(200);
    }).catch(err => res.status(500).send({ errorMessage: "Oops, something messed up!" }));
}


module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProduct
}