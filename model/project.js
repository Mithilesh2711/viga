const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var projectSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:String,
    departments: [
    {
        id:{
            type:Number,
            required:true,
            unique:true
        },
        name:String,
        assets:[
            {
                id:{
                    type:Number,
                    required:true,
                    unique:true
                },
                name: String
            }
        ]
    }
    ]
}, {
    timestamps: true
});

var Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;