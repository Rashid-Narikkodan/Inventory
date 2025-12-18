import express,{Response,Request} from "express";
import path from "path";
import productRoutes from './routes/inventory.routes'

export const app = express();

/* Global middleware */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

/* Temporary test route */
app.use('/', productRoutes)
app.use((req:Request,res:Response):void=>{
    res.status(404).json({success:true,message:'Page Not Found'})
})