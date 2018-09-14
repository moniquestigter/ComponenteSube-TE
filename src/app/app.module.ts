import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {TopBarComponent} from './top-bar/top-bar.component'
import {BodyComponent} from './body/body.component'
import { UiSwitchModule } from 'ngx-ui-switch';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}