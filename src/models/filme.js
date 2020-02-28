const {Schema, model} = require("mongoose")

const FilmeSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = model('filme', FilmeSchema)