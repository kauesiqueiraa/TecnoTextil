const express = require('express');
const axios = require('axios');
const cors = require('cors');
const btoa = require('btoa'); 

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions));



// const username = '';
// const password = '';

const auth = `Basic ${btoa('username:password')}`

app.get('/api/data', async (req, res) => {
  try {
    console.log('Solicitando dados');
    const response = await axios.get('http://177.54.187.183:9002/rest/zWSProjetos/get_all', {
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
    });
    console.log('Dados da API:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    res.statusCode(500).send('Erro ao obter dados da API')
  }
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
})

