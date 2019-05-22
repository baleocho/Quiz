import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { TicketComponent } from './ticket/ticket.component';

import { ScrollEventModule } from 'ngx-scroll-event';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CabeceroComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
