"use strict"

const { mongoose } = require("../configs/dbConnection")

const passwordEncrypt = require("../helpers/passwordEncrypt")

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            require: true,
            unique: true,
            validate: [
                (email) => (email.includes('@') && email.includes(".")),
                'Email type is incorrect'
            ]
        },

        password: {
            type: String,
            trim: true,
            require: true,
            set: (password) => passwordEncrypt(password)
        },

        isActive: {
            type: Boolean,
            default: true
        },

        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        collection: "users",
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema)