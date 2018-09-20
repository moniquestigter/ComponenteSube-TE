import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {TopBarComponent} from './top-bar/top-bar.component'
import {BodyComponent} from './body/body.component'
import { UiSwitchModule } from 'ngx-ui-switch';
import { OrderPipe } from 'ngx-order-pipe';
import { Globals } from './search';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule,
    Ng2SearchPipeModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}