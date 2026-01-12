import express,{ Response, Request } from "express";
import path from "path";
import productRoutes from './routes/inventory.routes'
import { ErrorResponse } from "./types/Error";

export const app = express();

/* Global middleware */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

/* Temporary test route */
app.use('/', productRoutes)

//404 Error handler
app.use((req:Request,res:Response<ErrorResponse>):void=>{
    const payload: ErrorResponse = {
        success:false,
        message:'Page Not Found',
        statusCode:404
    }
    res.status(404).json(payload)
})