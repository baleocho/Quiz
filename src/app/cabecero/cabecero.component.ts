import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  constructor() { }

  public handleScroll(event: ScrollEvent) {

  }
  ngOnInit() {
  }

}
