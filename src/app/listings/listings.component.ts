import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings:Listing[];
  
  constructor(private service:AppService) { }

  ngOnInit() {
	  this.service.getListings().subscribe(listings => {
		  this.listings = listings;
	  });
  } 
}