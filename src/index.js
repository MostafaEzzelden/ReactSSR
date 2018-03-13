import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home';

const app = express();
const PORT = (process.env.port || 3000);

app.use(express.static('public'));
app.get('/', (req, res) => {
    var content = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <div id="root">${renderToString(<Home/>)}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(content);
});

app.listen(PORT, () => {
    console.log('Listening on prot', PORT);
});
