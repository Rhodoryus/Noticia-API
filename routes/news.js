const express = require('express');
const News = require('../models/news');

const router = express.Router();

// Criar nova notícia
router.post('/', async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.status(201).send(news);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Listar todas as notícias
router.get('/', async (req, res) => {
    const news = await News.find();
    res.send(news);
});

// Obter uma notícia pelo ID
router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).send();
        }
        res.send(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Atualizar notícia
router.put('/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!news) {
            return res.status(404).send();
        }
        res.send(news);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Deletar notícia
router.delete('/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).send();
        }
        res.send(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
