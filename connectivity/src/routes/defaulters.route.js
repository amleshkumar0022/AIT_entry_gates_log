import express from 'express'
const router=express.Router();
import Out from '../models/out.models.js';
import connection from '../db/index.js';

connection();

const router = express.Router();
router.get('/defaulters', async (req, res) => {
    try {
        const defaulters = await Out.find({ timein: { $gt: '09:30' } });
        res.json(defaulters);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving defaulters' });
    }
});

export default router;
