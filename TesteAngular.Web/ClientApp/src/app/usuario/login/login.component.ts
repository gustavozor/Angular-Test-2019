import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

//decorator component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] //em colchetes pq é representado como se fosse uma lista
})
export class LoginComponent {
  public usuario;
  public usuarios = ["Erro 123456789!", "Dados não conferem"];
  
  constructor(private router: Router){
    this.usuario = new Usuario();
}

  entrar() {
    if (this.usuario.email == "gustavozor@icloud.com" && this.usuario.senha == "123abc")
    {
      localStorage.setItem("usuario-autenticado", "1");
      //this.router.navigate(['/']);
    }
  }
}
