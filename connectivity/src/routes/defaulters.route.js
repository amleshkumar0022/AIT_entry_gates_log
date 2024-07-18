import express from 'express';
import Out from './outModel.js'; // Ensure the path is correct

const router = express.Router();
router.get('/defaulters', async (req, res) => {
    try {
        const defaulters = await Out.find({ timein: { $gt: '09:30' } });
        res.json(defaulters);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving defaulters' });
    }
});
