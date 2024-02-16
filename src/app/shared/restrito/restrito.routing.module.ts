import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CadrastroProdutoComponent } from '../cadrastro-produto/cadrastro-produto.component';
import { ListagemProdutoComponent } from '../listagem-produto/listagem-produto.component';
import { AtualizaProdutoComponent } from '../atualiza-produto/atualiza-produto.component';


import { RestritoComponent } from './restrito.component';
import { ControleGuard } from 'src/app/guards/controle.guard';



const restritoRoutes: Routes = [
    {path: 'restrito', component: RestritoComponent, children:[
        {path: 'cadrastro', component: CadrastroProdutoComponent,canActivate:[ControleGuard]},
        {path: 'listagem', component: ListagemProdutoComponent,canActivate:[ControleGuard]},
        {path: 'editar/:id', component: AtualizaProdutoComponent,canActivate:[ControleGuard]}
    ]},
    
    {path: '', redirectTo: '/restrito/lista', pathMatch:'full'}
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
  })

export class RestritoRoutingModule{

}