const web = require('./web');

/*
if (appEnvironment === 'production') {
    const fs = require('fs');
    const https = require('https');

    const privateKey  = fs.readFileSync('/etc/letsencrypt/live/rodeiodigital.com/privkey.pem');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/rodeiodigital.com/fullchain.pem');
    const credentials = {key: privateKey, cert: certificate};

    https.createServer(credentials, web).listen( 3001, () => {
        console.log('Server is running on https!');
    });
} 
*/
// else {
    web.listen(3001, () => {
        console.log('Server is running!');
    });
// }