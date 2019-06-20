import  knex from 'knex';
import { config } from 'bluebird';

class SQL
{
    private _conection: knex;

    constructor(){
        this._conection  = knex({
            client: 'mssql',
            connection:{
                host: 'localhost',
                user: 'sa',
                password:'admin123',
                database:'pruebaKnex'
            } 
        });
    }

    async get_persona()
    {
        const tabla = await this._conection.select('*').from('persona');
        return tabla;
    }

    agregarPersona(Name:string,Age:number)
    {
        // Es importante que al hacer la insersion pongan then(()=>{}) al final, si no no sirve
        this._conection('persona').insert({nombre:Name,edad:Age}).catch(()=>{});
    }

    editarPersona(Name1:string,Name2:string)
    {
        // Es importante que al hacer la insersion pongan then(()=>{}) al final, si no no sirve
        this._conection('persona').where('nombre',Name1).update({nombre:Name2}).then(()=>{});
    }

    async eliminarPersona(Name:string)
    {
        let msg='Hola';
        await this._conection('persona').where('nombre',Name).del().catch(async (err)=>{
            if(!err) 
                msg = ("Persona eliminada");
            else 
            {
                msg = ("Hay errores");
            }
                
        });
        return {'mensaje':msg};
    }

    get connection():knex{
        return this._conection;
    }


}

export = SQL;