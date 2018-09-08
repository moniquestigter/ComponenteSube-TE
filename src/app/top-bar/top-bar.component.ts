import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor() {}
}

@NgModule({
  imports: [
  ],
  declarations: [TopBarComponent],
  bootstrap: [TopBarComponent]
})
export class TopBarModule { }

platformBrowserDynamic().bootstrapModule(TopBarModule);