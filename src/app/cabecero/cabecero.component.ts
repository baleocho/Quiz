import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareService } from "../../services/share.service";


@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @ViewChild('q1') q1:ElementRef;
  @ViewChild('q2') q2:ElementRef;
  @ViewChild('q3') q3:ElementRef;
  @ViewChild('q4') q4:ElementRef;
  @ViewChild('q5') q5:ElementRef;
  @ViewChild('q6') q6:ElementRef;
  @ViewChild('q7') q7:ElementRef;
  @ViewChild('q8') q8:ElementRef;
  @ViewChild('q9') q9:ElementRef;
  @ViewChild('q10') q10:ElementRef;
  @ViewChild('q11') q11:ElementRef;
  @ViewChild('q12') q12:ElementRef;
  @ViewChild('q13') q13:ElementRef;
  @ViewChild('q14') q14:ElementRef;
  @ViewChild('q15') q15:ElementRef;
  @ViewChild('q16') q16:ElementRef;
  @ViewChild('q17') q17:ElementRef;
  @ViewChild('q18') q18:ElementRef;
  @ViewChild('q19') q19:ElementRef;
  @ViewChild('q20') q20:ElementRef;
  timer01: number = 15;
  timer02: number = 15;
  timer03: number = 15;
  timer04: number = 15;
  timer05: number = 15;
  timer06: number = 15;
  timer07: number = 15;
  timer08: number = 15;
  timer09: number = 15;
  timer10: number = 15;
  timer11: number = 15;
  timer12: number = 15;
  timer13: number = 15;
  timer14: number = 15;
  timer15: number = 15;
  timer16: number = 15;
  timer17: number = 15;
  timer18: number = 15;
  timer19: number = 15;
  timer20: number = 15;
  constructor(private share: ShareService) {}

  ngOnInit() {}
  onSaveTimers() {
    this.timer01 = this.q1.nativeElement.value;
    this.share.timer01.emit(this.timer01);
    this.timer02 = this.q2.nativeElement.value;
    this.share.timer02.emit(this.timer02);
    this.timer03 = this.q3.nativeElement.value;
    this.share.timer03.emit(this.timer03);
    this.timer04 = this.q4.nativeElement.value;
    this.share.timer04.emit(this.timer04);
    this.timer05 = this.q5.nativeElement.value;
    this.share.timer05.emit(this.timer05);
    this.timer06 = this.q6.nativeElement.value;
    this.share.timer06.emit(this.timer06);
    this.timer07 = this.q7.nativeElement.value;
    this.share.timer07.emit(this.timer07);
    this.timer08 = this.q8.nativeElement.value;
    this.share.timer08.emit(this.timer08);
    this.timer09 = this.q9.nativeElement.value;
    this.share.timer09.emit(this.timer09);
    this.timer10 = this.q10.nativeElement.value;
    this.share.timer10.emit(this.timer10);
    this.timer11 = this.q11.nativeElement.value;
    this.share.timer11.emit(this.timer11);
    this.timer12 = this.q12.nativeElement.value;
    this.share.timer12.emit(this.timer12);
    this.timer13 = this.q13.nativeElement.value;
    this.share.timer13.emit(this.timer13);
    this.timer14 = this.q14.nativeElement.value;
    this.share.timer14.emit(this.timer14);
    this.timer15 = this.q15.nativeElement.value;
    this.share.timer15.emit(this.timer15);
    this.timer16 = this.q16.nativeElement.value;
    this.share.timer16.emit(this.timer16);
    this.timer17 = this.q17.nativeElement.value;
    this.share.timer17.emit(this.timer17);
    this.timer18 = this.q18.nativeElement.value;
    this.share.timer18.emit(this.timer18);
    this.timer19 = this.q19.nativeElement.value;
    this.share.timer19.emit(this.timer19);
    this.timer20 = this.q20.nativeElement.value;
    this.share.timer20.emit(this.timer20);

    alert('The Changes Have Saved');
  }
}
