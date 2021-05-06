import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());

const port = process.env.PORT || 9000;
app.listen(port);
