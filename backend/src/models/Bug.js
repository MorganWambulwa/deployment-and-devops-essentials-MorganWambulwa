// server/src/models/Bug.js
import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    createdAt: { type: Date, default: Date.now }
});

const Bug = mongoose.model('Bug', bugSchema);
export default Bug;