import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"

export class ShoppingCartService{
    items: CartItem[] = []

    clear(): void{
        this.items = [] 
    }

    add(item: MenuItem){
        let foundItem = this.items.find( mItem => mItem.menuItem.id === item.id )
        if(foundItem){
            foundItem.quantity = foundItem.quantity++
        }else{
            this.items.push(new CartItem(item))
        }
    }

    removerItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number{
        return this.items
                .map(item => item.value())
                .reduce((prev, value) => prev+value, 0)
    }
}