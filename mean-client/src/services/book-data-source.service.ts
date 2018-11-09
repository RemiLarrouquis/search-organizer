import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class BookDataSource extends DataSource<any> {

  public constructor(private api: ApiService) {
    super()
  }

  public connect() {
    return this.api.getBooks();
  }

  public disconnect() {
  }
}
