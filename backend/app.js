import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

