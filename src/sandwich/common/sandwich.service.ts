import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Sandwich} from '../sandwich'

@Injectable()
export class SandwichService {
    private apiUrl: string = "http://localhost:3000/sandwiches";

    constructor(private http: HttpClient){}

    public getSandwiches(): any{
        return this.http.get(this.apiUrl)
    }

    // pobieranie pojedynczek kanapki 
    public getSandwich(id: number): any{
        return this.http.get(`${this.apiUrl}/${id}`)

    }

    // dodawanie kanapki 

    public postSandwich(sandwich: Sandwich): any{
        return this. http.post(this.apiUrl, sandwich)
    }

    // usuwanie kanapki 

    public deleteSandwich(id: number): any {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}