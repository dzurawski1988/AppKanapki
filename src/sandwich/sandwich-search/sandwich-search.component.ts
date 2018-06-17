import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'sandwich-search',
    templateUrl: './sandwich-search.component.html'
})      

export class SandwichSearchComponent {
    @Output() public searchQuery: EventEmitter<string> = new EventEmitter();
    private query: string = '';
    public onChange(e):void{
    console.log(e.target.value);
    this.query = e.target.value;
}
public onClick():void {
    // wyemituj tą wartość 
    this.searchQuery.emit(this.query);
}}