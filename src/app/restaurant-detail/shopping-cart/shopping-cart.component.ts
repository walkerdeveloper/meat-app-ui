import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(): void{
    this.shoppingCartService.clear();
  }

  removeItem(item: any): void{
    this.shoppingCartService.removerItem(item);
  }

  addItem(item: any){
    this.shoppingCartService.add(item);
  }

  total(): number{
    return this.shoppingCartService.total();
  }

}
