const http = require('http');
const host = 'http://localhost';
const port = 3000
const stats = require('./ramUsage');

http
    .createServer((req, res) => {
        let url = req.url;
        
        if (url === '/stats') {
            res.end(JSON.stringify(stats, null, 2));
        } else {
            res.end('<h1>Adicione "/stats" a url para receber os dados de uso da memória</h1>');
        }
    })
.listen(port, () => console.log(`Server is runnig ${host}:${port}`));