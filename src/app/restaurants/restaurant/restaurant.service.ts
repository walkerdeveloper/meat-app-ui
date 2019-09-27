import { Restaurant } from "./restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> { 
        console.log(this.http.get(` Aqui ${MEAT_API}/restaurants`));
        
        return this.http.get('http://localhost:3000/restaurants')
            .map(response => response.json());
    }
}