import { Component } from '@angular/core';

@Component({
  selector: 'produton',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  public names = ["Computador", " Celular", " Caneta", " Cigarro"];
}
