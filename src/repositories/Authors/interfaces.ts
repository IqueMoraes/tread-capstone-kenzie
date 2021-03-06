import { UpdateResult, DeleteResult } from 'typeorm';

interface IAuthor {
    id?:number;
    name:string;
    country?:string;
    birthday?:Date;
    death_date?:Date;
}

interface IdataUpdate {
    [key:string]:string | number;
}

interface IAuthorsRepo {
    createAuthor:(author:IAuthor)=>IAuthor;
    saveAuthor:(author:IAuthor)=>void;
    findAuthor:(name:string)=>Promise<IAuthor>;
    findAuthors:(name:string, page:number, limit:number)=>Promise<Array<IAuthor>>;
    updateAuthor:(dataAuthor:IdataUpdate, update:IdataUpdate)=>Promise<UpdateResult>;
    deleteAuthor:(dataAuthor:IdataUpdate)=>Promise<DeleteResult>;
}

export { IAuthor, IdataUpdate, IAuthorsRepo };
