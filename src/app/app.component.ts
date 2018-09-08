import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {TopBarComponent} from './top-bar/top-bar.component'
import {DropdownComponent, DropdownModule} from './dropdown/dropdown.component';
import {BotonComponent, BotonModule} from './boton/boton.component';

@Component({
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    constructor(http: HttpClient) {
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    declarations: [AppComponent,TopBarComponent,DropdownComponent,BotonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);