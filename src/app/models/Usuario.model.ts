export class Usuario{
    public login: string="";
    public senha: string="";
    public admin:boolean=false;

    constructor(login:string,senha:string,admin:boolean){
        this.login=login;
        this.senha=senha;
        this.admin=admin
    }
}