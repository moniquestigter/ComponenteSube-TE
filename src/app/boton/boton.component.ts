import { Component, NgModule, enableProdMode } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxButtonModule} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-boton',
    templateUrl: 'boton.component.html',
    styleUrls: ['boton.component.css']
})

export class BotonComponent {
    ButtonOptions: any;

    constructor() {
        this.ButtonOptions = {
            text: '+ Agregar',
            type: 'normal',
            onClick: function (e) {
                //agregar un libro
            }
        };
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxButtonModule
    ],
    declarations: [BotonComponent],
    bootstrap: [BotonComponent]
})

export class BotonModule { }

platformBrowserDynamic().bootstrapModule(BotonModule);