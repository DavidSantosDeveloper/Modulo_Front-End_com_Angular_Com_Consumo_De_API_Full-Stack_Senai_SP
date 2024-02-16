import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/LoginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  usuario!: string;
  senha!:string;

  constructor(private _loginService:LoginService,private router: Router) { }

  ngOnInit():void{

  }

  fazerLogin(){

    this._loginService.login(this.usuario,this.senha);
    this.router.navigate(['/restrito/listagem']);

    this._loginService.setMostraMenu(false)

  }
}
