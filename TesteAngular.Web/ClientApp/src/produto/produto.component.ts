import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'] //em colchetes pq é representado como se fosse uma lista
})
export class ProdutoComponent {
  public name = "Produtinho";
}
