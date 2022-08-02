import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros!: Book[];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: data => {
        this.livros = data;
      },
      error: err => console.log('Error ', err)
    })
  }

}
