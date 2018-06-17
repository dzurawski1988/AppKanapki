// sandwich-form.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../sandwich";
import {SandwichService} from "../common/sandwich.service"

// nasz regexp
const SANDWICH = /sandwich$/i;

@Component({
  selector: 'sandwich-form',
  templateUrl: './sandwich-form.component.html'
})
export class SandwichFormComponent {

  public showErrors: boolean = false;

  public submit():void {
    this.showErrors = true;
    if (this.sandwichForm.valid) {
    //POst http://localhost:3000/sandwiches
    const sandwich = this.sandwichForm.getRawValue();
    this.sandwichService.postSandwich(sandwich)
    .toPromise()
    .then(() => { 
    console.log('Wszystko jest ok');
    this.showErrors = false;
    this.sandwichForm.reset();  
  })
    .catch(() => console.error("Coś poszło nie tak"));
    }
  }

  public sandwichForm: FormGroup;
  public ingredients: Ingredient[] = [
    {name: 'lettuce', fresh: true},
    {name: 'ham', fresh: false},
    {name: 'cheese', fresh: true},
    {name: 'tomato', fresh: true}
  ];

  
  private nameDef = [ '', [Validators.required, Validators.pattern(SANDWICH)] ];

  constructor(private formBuilder: FormBuilder,
    private sandwichService: SandwichService
  ) {}

  public ngOnInit(): void {
    // tu zainicjalizujemy formularz...
    this.sandwichForm = this.createSandwichForm();
  }

  private createSandwichForm(): FormGroup {
    return this.formBuilder.group({
      name: this.nameDef,
      sauce: ['', Validators.required],
      ingredients: ['', Validators.required],
      grilled: [false],
      price: [null, Validators.required]
    });
  }
}
