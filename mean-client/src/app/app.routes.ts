import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: {title: 'Book List'}
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: {title: 'Book Details'}
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: {title: 'Create Book'}
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: {title: 'Edit Book'}
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
