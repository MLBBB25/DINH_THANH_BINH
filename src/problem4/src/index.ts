// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db';
import Product from './models/index';

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save();
        res.status(201).send(product)
    } 
    catch (error: any) {
        console.error(error)
        res.status(500).send(error?.message)
    }
})

app.get('/products', async (req, res) => {
    try {
        const product = await Product.find({ _destroy: false })
        res.send(product)
    } 
    catch (error: any) {
        console.error(error)
        res.status(500).send(error?.message)
    }
})

app.get('/products/:id', async (req, res) =>  {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) res.status(404).send('Product not found!')
        res.send(product)
    } 
    catch (error: any) {
        console.error(error)
        res.status(500).send(error?.message)
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) res.status(404).send('Product not found!')
        res.send(product)
    }
    catch (error: any) {
        console.error(error)
        res.status(500).send(error?.message)
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.updateOne({ _id : req.params.id, _destroy: false }, { _destroy: true })
        if (!product) res.status(404).send('Product not found!')
        res.send('Delete successful!')
    } 
    catch (error: any) {
        console.error(error)
        res.status(500).send(error?.message)
    }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})