import express,{Application,Request,Response,NextFunction} from 'express';
import SQL from './sql';
import cors from 'cors';
import bodyparser from 'body-parser';


const app: Application = express();

app.use(cors({origin:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({type: ['application/json', 'text/plain']}));

app.get('/', async (req: Request,res: Response, next: NextFunction)=>{
    /* Para recibir con postman */
    const conexion = new SQL();
    const tabla = await conexion.get_persona();
    
    if(tabla.length>0)
        res.send({'data':tabla});
    else
        res.send("No hay datos");
});

app.post('/agregar',(req:Request,res:Response,next:NextFunction)=>{
    const conexion = new SQL();
    console.log(req.body);
    conexion.agregarPersona(req.body.nombre,parseInt(req.body.edad)); 
    res.send("Persona agregada");
});

app.put('/editar',(req:Request,res:Response,next:NextFunction)=>{
    const conexion = new SQL();
    conexion.editarPersona(req.body.nombre1,req.body.nombre2);
    res.send({mensaje:"Editado :)"});
});

app.delete('/eliminar',async (req:Request,res:Response,next:NextFunction)=>{
    const conexion = new SQL();
    res.send(await conexion.eliminarPersona(req.query.nombre));
});


export = app;