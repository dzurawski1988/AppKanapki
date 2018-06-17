// sandwich.module.ts
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SandwichFormComponent} from "./sandwich-form/sandwich-form.component";
import {SandwichService} from './common/sandwich.service';
import {SandwichListComponent} from './sandwich-list/sandwich-list.component';
import {SandwichSearchComponent} from './sandwich-search/sandwich-search.component'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ //dodajemy komponenty, dyrektywy, pipe-y 
    SandwichFormComponent,
    SandwichListComponent,
    SandwichSearchComponent
  ],
  providers: [ //dodajemy serwisy
  SandwichService,

  ],
  exports: [ // 
    SandwichFormComponent,
    SandwichSearchComponent
    
  ]
})
export class SandwichModule { }
