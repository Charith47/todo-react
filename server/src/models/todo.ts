import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            default: false,
        },
        completedDate: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Todo', todoSchema);
