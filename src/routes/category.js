"use strict";

const router = require("express").Router();

const category = require("../controllers/category")
const permissions = require("../middlewares/permissions")

router.route("/")
    .get(permissions.isLogin, category.list)
    .post(permissions.isAdmin, category.create)

router.route("/:id")
    .get(permissions.isLogin, category.read)
    .put(permissions.isAdmin, category.update)
    .patch(permissions.isAdmin, category.update)
    .delete(permissions.isAdmin, category.delete)

module.exports = router