import express from 'express';
import signup from '../server/router/signup';

const app = express();
app.get('/',(req, res) => {
    res.json({
        message:'hello gilbert you make it'
    });
})

app.use('/api/v1/auth/signup',signup)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));

export default app;