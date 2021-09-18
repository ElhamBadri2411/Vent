import Message from '../models/Message.js';
import mongoose from 'mongoose';
import express from 'express';

// put all functions that communicate with the database in here

export const getMessage = async (req, res) => { // function that gets a random message from the database
    try {
        const message = await Message.aggregate([{ $sample: { size: 1 } }]) // gets a random item from collection

        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}