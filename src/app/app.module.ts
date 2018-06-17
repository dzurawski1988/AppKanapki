// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import {HttpClientModule} from "@angular/common/http";
import {TitlePipe} from "./title.pipe";
import {DemoComponent} from "./demo.component";
import { RouterModule, Routes } from '@angular/router';
import {OopsComponent} from "./oops.component";
import { SandwichModule } from '../sandwich/sandwich.module';
import {SandwichListComponent} from '../sandwich/sandwich-list/sandwich-list.component';
import {SandwichFormComponent} from '../sandwich/sandwich-form/sandwich-form.component'



// Sciezki w mojej aplikacji
const appRoutes: Routes = [
  { path: '', component: SandwichListComponent },
  { path: 'form', component: SandwichFormComponent },
  { path: '**', component: OopsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Konfigurujemy nasze sciezki
    RouterModule.forRoot(appRoutes),
    SandwichModule
  ],
  // Twoje komponenty / dyrektywy / pipe'y
  declarations: [
    AppComponent,
    DemoComponent,
    OopsComponent,
    TitlePipe
  ],
  // Twoje serwisy
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
