import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  products: string [];

  ngOnInit() {
    this.httpService.get('../../assets/products.json').subscribe(
      data => {
        this.products = data as string [];
        console.log(this.products[1]);
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
    );
  }

}
