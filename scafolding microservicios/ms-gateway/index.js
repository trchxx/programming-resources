import express from 'express';
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer();

process.loadEnvFile();

const msPdvBasepath = process.env.MS_PDV_BASEPATH;
const msLoginBasepath = process.env.MS_LOGIN_BASEPATH;

app.get('/', (req, res) => {
  res.status(200).send('Accediendo a la api guardando 2');
});

app.use('/api/pdv', (req, res) => {
  console.log(`Incoming request to /api/pdv: ${req.method} ${req.url} `);
  proxy.web(req, res, { target: msPdvBasepath }, (err) => {
  console.error(`Error forwarding request to api/pdv: ${err.message} `);
  res.status(500).send('Internal Server Error');  
 });
});
  
app.use('/api/login', (req, res) => { 
  console.log(`Incoming request to /api/login: ${req.method} ${req.url} `);
  proxy.web(req, res, { target: msLoginBasepath }, (err) => {
  console.error(`Error forwarding request to api/login: ${err.message} `);
  res.status(500).send('Internal Server Error');
  });
});
  
  // Add this middleware to log the request received by the proxy 
proxy.on('proxyReq', function (proxyReq, req, res, options) {
  console.log(`Received request to ${options.target.href}: ${req.method} ${req.url} `);
});
  
const port = 3000;
  app.listen(port, () => {
  console.log(`API Gateway listening on port ${port} `);
});