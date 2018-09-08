import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarModule} from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {DropdownComponent, DropdownModule} from './dropdown/dropdown.component';
import {BotonComponent, BotonModule} from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TopBarModule,
    DropdownModule,
    BotonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);