import express from 'express';
import signup from '../server/router/signup';
import signin from '../server/router/signin';

const app = express();

app.use(express.json());

// app.get('/',(req, res) => {
//     res.json({
//         message:'hello gilbert you make it'
//     });
// })

app.use('/api/v1/auth/signup',signup);
app.use('/api/v1/auth/signin',signin);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));

export default app;