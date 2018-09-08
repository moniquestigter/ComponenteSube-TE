import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

@Injectable()
export class BodyComponent implements OnInit {

  constructor(private appSettingsService, private http: HttpClient) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {
      console.log(data)
  });
  }

  private _productURL = 'assets/prueba.json';    
  getProducts(): Observable<any> {
        return this.http.get(this._productURL).map((response : Response) => <any> response.json())
        .do(data =>console.log(JSON.stringify(data)));
}

}
