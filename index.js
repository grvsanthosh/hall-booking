import express from 'express';
import useController from './src/Controller/index.js';

let PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use(useController);

app.listen(PORT,()=>{console.log('listening on port')});