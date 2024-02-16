import { Component } from '@angular/core';


import { Router } from '@angular/router';
// import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produto.model';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { ProdutoService } from 'src/app/services/ProdutoService/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {

  public produtos: Produto[] = [ ];
  public produto: Produto = new Produto(0,"","","","",0);
  counter!: number;

  // ,
  constructor(private _produtoService: ProdutoService,private router:Router,private _loginService: LoginService){}



  ngOnInit():void{
    this.listarProdutos();
    // this.counter = Number(localStorage.getItem('counter'))
    // this.counter++;

    // if(localStorage.getItem('counter') !== '1') {
      //  this._loginService.setMostraMenu(false)
    // }
    this._loginService.setMostraMenu(false)
  }

  listarProdutos():void{
    let id_disponivel=0;
    let requisicao=this._produtoService.getProdutos()
    .subscribe(
       (produtos)=>{
          id_disponivel=produtos.length
       }
      )

     


   this._produtoService.getProdutos()
    .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.nome,
                item.categoria,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
     

  }

  excluir(id: number){
    this._produtoService.removerProduto(id.toString()).subscribe(
      vaga => {
        this.listarProdutos();
      },
      err => {console.log("erro ao Excluir")}
    );

   
    this.router.navigate(["/restrito/listagem"]);
    window.location.href = "/restrito/listagem";

  }

}
