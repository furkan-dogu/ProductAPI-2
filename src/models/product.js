"use strict"

const { mongoose } = require("../configs/dbConnection")

const ProductSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        title: {
            type: String,
            trim: true,
            required: true
        },

        description: {
            type: String,
            trim: true,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        discountPercentage : {
            type: Number,
            required: true
        },

        rating: {
            type: Number,
            required: true
        },

        stock: {
            type: Number,
            required: true
        },

        brand: {
            type: String,
            trim: true,
        },

        thumbnail: {
            type: String,
            required: true,
        },

        images: [],
    },
    {
        collection: "products",
        timestamps: true,
    }
)

module.exports = mongoose.model("Product", ProductSchema)