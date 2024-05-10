"use strict"

const router = require("express").Router();

const product = require("../controllers/product")
const { isAdmin } = require("../middlewares/permissions")

router.route("/")
    .get(product.list)
    .post(isAdmin, product.create)

router.route("/:id")
    .get(product.read)
    .put(isAdmin, product.update) 
    .patch(isAdmin, product.update)
    .delete(isAdmin, product.delete)

module.exports = router