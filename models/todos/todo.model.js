import { mongoose } from 'mongoose';
import { subTodo } from './subtodo.model';

const todoSchema = new mongoose.Schema({
    content : {
        type: String,
        required : true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,  // this will provide ref of other schema
        ref: "User"
    },
    subTodos : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "subTodo"
        }
    ] // Array of sub-todos
}, {timestamps : true})

export const todo = mongoose.model("todo", todoSchema)