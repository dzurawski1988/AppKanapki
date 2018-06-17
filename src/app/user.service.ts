// user.service.ts

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  // teraz mogę korzystać z this.http :-)
  constructor(private http: HttpClient) {}

  public getUsers(): any {
    return this.http.get(this.url);
  }
}
