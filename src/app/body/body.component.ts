import { Component, OnInit,HostListener  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Globals } from '../search';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  constructor(private httpService: HttpClient, private globals:Globals) { 
  	this.checks = "onClick";
  }

  mobileView: boolean;
  products: string [];
  checks: string;
  

  ngOnInit() {
    this.mobileView = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    this.globals.searchQuery = "";
    this.httpService.get('../../assets/products.json').subscribe(
      data => {
        this.products = data as string [];
        this.products.map(function(item){
          item["selected"] = true;
        });
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
    );
  }
  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    if(window.innerWidth <= 800)
      this.mobileView = true;
    else
      this.mobileView = false;
     console.log(window.innerWidth);
  }
  check() {
  	this.products.map(function(item){
  		item["selected"] = true;
  	});
  }

}
