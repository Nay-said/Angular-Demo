import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from './models/listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { 
	//   console.log("service conected");
  }
  url:string = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  getListings():Observable<Listing[]> {
	  return this.http.get<Listing[]>(this.url);
  }
}