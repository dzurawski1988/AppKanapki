import {Component} from '@angular/core';
import {SandwichService} from '../common/sandwich.service'
import {Sandwich} from '../sandwich'

@Component({
    selector: 'sandwich-list',
    templateUrl: './sandwich-list.component.html'
})

export class SandwichListComponent{

    public sandwiches: Sandwich[];

    constructor (private sandwichService: SandwichService) {}

    public ngOnInit():void {
        this.updateSandwichList();
    }

    public search(query):void{

        this.updateSandwichList(query);

    }

public updateSandwichList(query?: string) :void {


    this.sandwichService.getSandwiches()
    .toPromise()
    .then((sandwiches) => {
        console.log("Pobranow szystkie kanapki");
        this.sandwiches = sandwiches;
    })
    .catch(() => console.error("Coś poszło nie tak"));}

public deleteSandwich(id:number):void {
    this.sandwichService.deleteSandwich(id).toPromise()
    .then(() => console.log("Kanapka usunięta"))
    .catch(() => console.error("Nie udało się usunąc kanapki"))
}}