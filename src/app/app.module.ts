import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { TicketComponent } from './ticket/ticket.component';

import { ScrollEventModule } from 'ngx-scroll-event';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraTituloComponent,
    CabeceroComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollEventModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
