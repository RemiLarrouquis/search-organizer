import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BookDataSource } from '../../services/book-data-source.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private books: any = [];

  public displayedColumns: Array<string> = ['isbn', 'title', 'author'];
  public dataSource: DataSource = new BookDataSource(this.api);

  public constructor(private api: ApiService) {
  }

  public ngOnInit(): void {

    this.api.getBooks().subscribe(res => {
      console.log(res);
      this.books = res;
    }, err => {
      console.log(err);
    });

  }

}
