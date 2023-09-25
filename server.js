    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const PORT = process.env.PORT || 3001;
    mongoose.connect('mongodb://localhost/crud-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    app.use(express.json());

    const router = express.Router();
    const {
    AbrigoPet,
    Adocao,
    Adotante,
    Cachorro,
    Gato,
    Coelho,
    EnderecoAdotante,
    Pessoa,
    Pet,

    } = require('./models');

    router.post('/abrigos', async (req, res) => {
    try {
        const abrigo = new AbrigoPet(req.body);
        await abrigo.save();
        res.json(abrigo);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o abrigo' });
    }
    });

    router.get('/abrigos', async (req, res) => {
    const abrigos = await AbrigoPet.find();
    res.json(abrigos);
    });

    router.put('/abrigos/:id', async (req, res) => {
    try {
        const abrigo = await AbrigoPet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(abrigo);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o abrigo' });
    }
    });

    router.delete('/abrigos/:id', async (req, res) => {
    try {
        await AbrigoPet.findByIdAndRemove(req.params.id);
        res.json({ message: 'Abrigo excluído' });
    } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o abrigo' });
    }
    });

    router.post('/adocoes', async (req, res) => {
    try {
        const adocao = new Adocao(req.body);
        await adocao.save();
        res.json(adocao);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao criar a adoção' });
    }
    });

    router.get('/adocoes', async (req, res) => {
    const adocoes = await Adocao.find();
    res.json(adocoes);
    });

    router.put('/adocoes/:id', async (req, res) => {
    try {
        const adocao = await Adocao.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(adocao);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar a adoção' });
    }
    });

    router.delete('/adocoes/:id', async (req, res) => {
    try {
        await Adocao.findByIdAndRemove(req.params.id);
        res.json({ message: 'Adoção excluída' });
    } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir a adoção' });
    }
    });


    router.post('/adotantes', async (req, res) => {
        try {
        const adotante = new Adotante(req.body);
        await adotante.save();
        res.json(adotante);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o adotante' });
        }
    });
    
    router.get('/adotantes', async (req, res) => {
        const adotantes = await Adotante.find();
        res.json(adotantes);
    });
    
    router.put('/adotantes/:id', async (req, res) => {
        try {
        const adotante = await Adotante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(adotante);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o adotante' });
        }
    });
    
    router.delete('/adotantes/:id', async (req, res) => {
        try {
        await Adotante.findByIdAndRemove(req.params.id);
        res.json({ message: 'Adotante excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o adotante' });
        }
    });
    
    router.post('/cachorros', async (req, res) => {
        try {
        const cachorro = new Cachorro(req.body);
        await cachorro.save();
        res.json(cachorro);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o cachorro' });
        }
    });
    
    router.get('/cachorros', async (req, res) => {
        const cachorros = await Cachorro.find();
        res.json(cachorros);
    });
    
    router.put('/cachorros/:id', async (req, res) => {
        try {
        const cachorro = await Cachorro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cachorro);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o cachorro' });
        }
    });
    
    router.delete('/cachorros/:id', async (req, res) => {
        try {
        await Cachorro.findByIdAndRemove(req.params.id);
        res.json({ message: 'Cachorro excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o cachorro' });
        }
    });
    
    router.post('/gatos', async (req, res) => {
        try {
        const gato = new Gato(req.body);
        await gato.save();
        res.json(gato);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o gato' });
        }
    });
    
    router.get('/gatos', async (req, res) => {
        const gatos = await Gato.find();
        res.json(gatos);
    });
    
    router.put('/gatos/:id', async (req, res) => {
        try {
        const gato = await Gato.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(gato);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o gato' });
        }
    });
    
    router.delete('/gatos/:id', async (req, res) => {
        try {
        await Gato.findByIdAndRemove(req.params.id);
        res.json({ message: 'Gato excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o gato' });
        }
    });
    
    router.post('/coelhos', async (req, res) => {
        try {
        const coelho = new Coelho(req.body);
        await coelho.save();
        res.json(coelho);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o coelho' });
        }
    });
    
    router.get('/coelhos', async (req, res) => {
        const coelhos = await Coelho.find();
        res.json(coelhos);
    });
    
    router.put('/coelhos/:id', async (req, res) => {
        try {
        const coelho = await Coelho.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(coelho);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o coelho' });
        }
    });
    
    router.delete('/coelhos/:id', async (req, res) => {
        try {
        await Coelho.findByIdAndRemove(req.params.id);
        res.json({ message: 'Coelho excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o coelho' });
        }
    });
    
    router.post('/enderecos-adotantes', async (req, res) => {
        try {
        const enderecoAdotante = new EnderecoAdotante(req.body);
        await enderecoAdotante.save();
        res.json(enderecoAdotante);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o endereço do adotante' });
        }
    });
    
    router.get('/enderecos-adotantes', async (req, res) => {
        const enderecosAdotantes = await EnderecoAdotante.find();
        res.json(enderecosAdotantes);
    });
    
    router.put('/enderecos-adotantes/:id', async (req, res) => {
        try {
        const enderecoAdotante = await EnderecoAdotante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(enderecoAdotante);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o endereço do adotante' });
        }
    });
    
    router.delete('/enderecos-adotantes/:id', async (req, res) => {
        try {
        await EnderecoAdotante.findByIdAndRemove(req.params.id);
        res.json({ message: 'Endereço do adotante excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o endereço do adotante' });
        }
    });
    
    router.post('/pessoas', async (req, res) => {
        try {
        const pessoa = new Pessoa(req.body);
        await pessoa.save();
        res.json(pessoa);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar a pessoa' });
        }
    });
    
    router.get('/pessoas', async (req, res) => {
        const pessoas = await Pessoa.find();
        res.json(pessoas);
    });
    
    router.put('/pessoas/:id', async (req, res) => {
        try {
        const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(pessoa);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar a pessoa' });
        }
    });
    
    router.delete('/pessoas/:id', async (req, res) => {
        try {
        await Pessoa.findByIdAndRemove(req.params.id);
        res.json({ message: 'Pessoa excluída' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir a pessoa' });
        }
    });
    
    
    router.post('/pets', async (req, res) => {
        try {
        const pet = new Pet(req.body);
        await pet.save();
        res.json(pet);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao criar o pet' });
        }
    });
    
    router.get('/pets', async (req, res) => {
        const pets = await Pet.find();
        res.json(pets);
    });
    
    router.put('/pets/:id', async (req, res) => {
        try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(pet);
        } catch (error) {
        res.status(500).json({ error: 'Falha ao atualizar o pet' });
        }
    });
    
    router.delete('/pets/:id', async (req, res) => {
        try {
        await Pet.findByIdAndRemove(req.params.id);
        res.json({ message: 'Pet excluído' });
        } catch (error) {
        res.status(500).json({ error: 'Falha ao excluir o pet' });
        }
    });
    
    module.exports = router;
    

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
