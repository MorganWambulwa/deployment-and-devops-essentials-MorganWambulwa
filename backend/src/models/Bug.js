import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'open' },
}, { timestamps: true });

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;
