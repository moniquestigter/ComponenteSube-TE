import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxTreeViewComponent
} from 'devextreme-angular';

import CustomStore from 'devextreme/data/custom_store';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    @ViewChild(DxTreeViewComponent) treeView;
    treeDataSource: any;
    treeBoxValue: string;
    constructor(http: HttpClient) {
        this.treeDataSource = this.makeAsyncDataSource(http, "products.json");
    }

    makeAsyncDataSource(http, jsonFile){
        return new CustomStore({
            loadMode: "raw",
            key: "ID",
            load: function() {
                return http.get('data/' + jsonFile)
                    .toPromise();
            }
        });
    };

    syncTreeViewSelection() {
        if (!this.treeView) return;

        if (!this.treeBoxValue) {
            this.treeView.instance.unselectAll();
        } else {
            this.treeView.instance.selectItem(this.treeBoxValue);
        }
    }

    treeView_itemSelectionChanged(e){
        this.treeBoxValue = e.component.getSelectedNodesKeys();
    }

}

@NgModule({
    imports: [
        BrowserModule,
        DxTreeViewModule,
        DxDropDownBoxModule,
        HttpClientModule
    ],
    declarations: [DropdownComponent],
    bootstrap: [DropdownComponent]
})
export class DropdownModule { }

platformBrowserDynamic().bootstrapModule(DropdownModule);