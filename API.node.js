import express, { json } from 'express'; app const = express(); app.use(json());
// Array para armazenar os produtos let produtos = [];
// Rotas da API
// Listar todos os produtos app.get('/produtos', (req, res) => { res.json(produtos); });
// Buscar produto por ID app.get('/produtos/:id', (req, res) => { const id = req.params.id; const produto = produtos.find(p => p.id == = id); if (!produto) { res.status(404).json({ error: 'Produto não encontrado' }); } else { res.json(produto); } });
// Adiciona um produto app.post('/produtos', (req, res) => { const produto = req.body; produtos.push(produto); res.status(201).json(produto); }) ;
// Atualizar um produto app.put('/produtos/:id', (req, res) => { const id = req.params.id; const produto = produtos.find(p => p.id === id); if (!produto) { res.status(404).json({ error: 'Produto não encontrado' }); } else { Object.assign(produto, req.body); res.json(produto); } });
// Remove um produto app.delete('/produtos/:id', (req, res) => { const id = req.params.id; const index = produtos.findIndex(p => p.id === id); if (index === -1) { res.status(404).json({ error: 'Produto não encontrado' }); } else { produtos.splice(index, 1); res.sendStatus(204 ); } });
// Iniciar o servidor app.listen(3000, () => { console.log('Servidor iniciado na porta 3000'); });
