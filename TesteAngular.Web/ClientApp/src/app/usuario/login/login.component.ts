import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

//decorator component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] //em colchetes pq é representado como se fosse uma lista
})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["Erro Inventado!", "Dados não conferem"];
  constructor(){
    this.usuario = new Usuario();
}

  entrar() {
    debugger;
      this.usuarioAutenticado = (this.usuario.email == "gustavozor@icloud.com" && this.usuario.senha == "123abc");
  }
}
