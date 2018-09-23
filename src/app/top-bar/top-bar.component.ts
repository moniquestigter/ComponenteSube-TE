import { NgModule, Component, HostListener } from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    if(window.innerWidth <= 800)
      this.mobileView = true;
    else
      this.mobileView = false;
     console.log(window.innerWidth);
  }
}