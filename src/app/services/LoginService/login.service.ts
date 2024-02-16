import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostraMenu = new Subject<boolean>()

  constructor() { }

  login(usuario:string, senha:string){
    if(usuario=="aluno" && senha=="1234"){
      localStorage.setItem('token','qwer1234');
    }else{
    }
  }

  setMostraMenu(value: boolean) {
    this.mostraMenu.next(value)
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
