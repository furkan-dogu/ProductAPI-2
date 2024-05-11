"use strict"

const router = require("express").Router();

const product = require("../controllers/product")
const permissions = require("../middlewares/permissions")

router.route("/")
    .get(permissions.isLogin, product.list)
    .post(permissions.isAdmin, product.create)

router.route("/:id")
    .get(permissions.isLogin, product.read)
    .put(permissions.isAdmin, product.update) 
    .patch(permissions.isAdmin, product.update)
    .delete(permissions.isAdmin, product.delete)

module.exports = router