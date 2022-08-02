import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable()

export class BooksService {
    private url = 'https://localhost:44382/api/bookstore';

    httpOptions = {
        Headers: new HttpHeaders({
            'content-type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }
}