import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import { UiSwitchModule } from 'ngx-ui-switch';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

@Injectable()
export class BodyComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: string [];

  _productURL = '../../assets/products.json';   

  ngOnInit() {
    this.http.get(this._productURL).subscribe(prods=>{
          this.products = prods as string [];
        }
      );
  }

}
