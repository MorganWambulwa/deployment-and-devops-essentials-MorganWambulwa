import Bug from '../models/Bug.js';

export const getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json({ data: bugs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBug = async (req, res) => {
  try {
    const newBug = new Bug(req.body);
    await newBug.save();
    res.status(201).json({ data: newBug });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateBug = async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ data: updatedBug });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
