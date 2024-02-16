import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/ProdutoService/produto.service';

@Component({
  selector: 'app-cadrastro-produto',
  templateUrl: './cadrastro-produto.component.html',
  styleUrls: ['./cadrastro-produto.component.css']
})
export class CadrastroProdutoComponent {
  public produtos: Produto[] = [];
  public produto: Produto = new Produto(0,"","","","",0);

  constructor(private _produtoService: ProdutoService, private router:Router) { }

  ngOnInit(): void {
      // async function  requisicao_produtos(){
      // let response= await fetch("http://localhost:3000/produtos")
      // let json=await response.json()

      // return json
    // }
    // console.log(requisicao_produtos().)
  }

  cadastrar(){

   
    let requisicao_produtos=async ()=>{
      let response= await fetch("http://localhost:3000/produtos")
      let json:Produto[]=await response.json()

      return json
    }

 

    // let id_disponivel=requisicao_produtos().lenght;
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","","",0);

        alert("Cadastro Efetuado com Sucesso")
      },
      err => {
        alert("erro ao cadastrar")
      }
    );

     this.router.navigate(["/restrito/listagem"]);

  }
}
