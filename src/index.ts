import express from 'express';
import productRoute from './routes/v1/productRoute';
import 'dotenv/config';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';


const apiSpec  = YAML.load("./api-spec.yml");

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(apiSpec));

app.use('/api/v1', productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})