import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { usersRouter } from './components/Users/users.route';
import { config } from 'dotenv';
import { productsRouter } from './components/Products/products.route';
import { errorM } from './middlewares/errorM';
import { categoriesRouter } from './components/categories/categories.route';

config();
const app = express();

app.use(cors()).use(express.json()).use(morgan('dev'));

const version = 'v1';
const appName = 'api';

const context = `/${appName}/${version}`;

app.use('/public', express.static('./public'));

app.use([`${context}/users`, `${context}/user`], usersRouter);
app.use([`${context}/products`, `${context}/product`], productsRouter);
app.use([`${context}/categories`, `${context}/category`], categoriesRouter);
app.get(['/', `${context}/`], (_req, res) => {
    res.send(`<div style="height:calc(100vh - 16px); display: flex; align-items: center; justify-content: center; text-align: center;;">
                        <h1>hello, welcome to this Ecommerce Api, <br/>designed by <b style="background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,255,1) 0%, rgba(0,83,93,1) 51%, rgba(8,255,41,1) 100%); background-clip: text; -webkit-text-fill-color: transparent;">BrightkyEfoo</b></h1>
                    </div>`,
    );
});
app.use(errorM);
app.use((req, res, next) => {
    res.status(404).json({
        msg: `Resource not found`,
        route: req.path,
        method: req.method,
    });
});

export { app };