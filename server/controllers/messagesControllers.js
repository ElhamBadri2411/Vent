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

export const createMessage = async (req, res) => { // function that gets creates a message and stores it in the database
    const { title, message, author} = req.body;

    const newMessage = new Message({title, message, author});

    try {
        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}