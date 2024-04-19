import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { usersRouter } from './components/Users/users.route';
import { config } from 'dotenv';
import { productsRouter } from './components/Products/products.route';
import { errorM } from './middlewares/errorM';
import { categoriesRouter } from './components/categories/categories.route';
import { homeHTML } from './constants/app';
//import favicon from 'serve-favicon';

config();
const app = express();

app.use(cors()).use(express.json()).use(morgan('dev'));

const version = 'v1';
const appName = 'api';

const context = `/${appName}/${version}`;

app.use('/public', express.static('./public'));
//app.use(favicon('./public/images/favicon.ico'));

app.use([`${context}/users`, `${context}/user`], usersRouter);
app.use([`${context}/products`, `${context}/product`], productsRouter);
app.use([`${context}/categories`, `${context}/category`], categoriesRouter);
app.get(['/', `${context}/`], (_req, res) => {
    res.send(homeHTML);
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