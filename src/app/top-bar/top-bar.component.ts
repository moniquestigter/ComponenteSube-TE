import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Globals } from '../search';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  mobileView: boolean;

  constructor(private globals:Globals) { }

  ngOnInit() {
    this.mobileView = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  onKeyUp(event: any){
  	this.globals.searchQuery = event.target.value;
  }
}