import { Injectable, Injector } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"

//decorator informando que é injectable
@Injectable({
  providedIn: 'root'
})
  //precisa ser configurado no app.module
  //necessário publicar a classe em local que pode ser injetada
export class GuardaRotas implements CanActivate{

  constructor(private router: Router)
  {

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var autenticado = localStorage.getItem("usuario-autenticado");

    if (autenticado == "1") {
      return true;
    }
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state }}); //pra entrar no link que tentou entrar
      return true;
  }
}
