export class Produto{
    id: number = 0;
    nome: string ="";
    categoria:string="";
    descricao: string="";
    foto: string="";
    preco: number=0;

    constructor(id: number,nome: string,categoria:string,descricao: string, foto: string,preco: number){
        this.id = id;
        this.nome = nome;
        this.categoria=categoria;
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }
}