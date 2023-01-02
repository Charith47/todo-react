import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isDone: {
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

todoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

export default mongoose.model('Todo', todoSchema);
