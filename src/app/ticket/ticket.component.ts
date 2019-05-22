import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  nextCount: number = 1; //The var that control the cont of question, that its used on switch
  buttonNext: boolean = true; //Disable or active the next button
  startQuiz: boolean = false; //If its false show the initial information if is true show the div that have the questions
  view1: boolean = false; //Show the container that have the fisrt question
  timer01: any = 15; //The default timer and this var change where start the question
  aswer1: any; //Save the result of question (1 = Correct || 0 = Incorrect)
  intervalo1: any; //Its the interval for start and stop the timer
  inputsQuestion1Disable: boolean = false; //Where the question its aswer this var change to Disable other options
  view2: boolean = false;
  timer02: any = 15;
  aswer2: any;
  intervalo2: any;
  inputsQuestion2Disable: boolean = false;
  view3: boolean = false;
  timer03: any = 15;
  aswer3: any;
  intervalo3: any;
  inputsQuestion3Disable: boolean = false;
  view4: boolean = false;
  timer04: any = 15;
  aswer4: any;
  intervalo4: any;
  inputsQuestion4Disable: boolean = false;
  view5: boolean = false;
  timer05: any = 15;
  aswer5: any;
  intervalo5: any;
  inputsQuestion5Disable: boolean = false;
  view6: boolean = false;
  timer06: any = 15;
  aswer6: any;
  intervalo6: any;
  inputsQuestion6Disable: boolean = false;
  view7: boolean = false;
  timer07: any = 15;
  aswer7: any;
  intervalo7: any;
  inputsQuestion7Disable: boolean = false;
  view8: boolean = false;
  timer08: any = 15;
  aswer8: any;
  intervalo8: any;
  inputsQuestion8Disable: boolean = false;
  view9: boolean = false;
  timer09: any = 15;
  aswer9: any;
  intervalo9: any;
  inputsQuestion9Disable: boolean = false;
  view10: boolean = false;
  timer10: any = 15;
  aswer10: any;
  intervalo10: any;
  inputsQuestion10Disable: boolean = false;
  view11: boolean = false;
  timer11: any = 15;
  aswer11: any;
  intervalo11: any;
  inputsQuestion11Disable: boolean = false;
  view12: boolean = false;
  timer12: any = 15;
  aswer12: any;
  intervalo12: any;
  inputsQuestion12Disable: boolean = false;
  view13: boolean = false;
  timer13: any = 15;
  aswer13: any;
  intervalo13: any;
  inputsQuestion13Disable: boolean = false;
  view14: boolean = false;
  timer14: any = 15;
  aswer14: any;
  intervalo14: any;
  inputsQuestion14Disable: boolean = false;
  view15: boolean = false;
  timer15: any = 15;
  aswer15: any;
  intervalo15: any;
  inputsQuestion15Disable: boolean = false;
  view16: boolean = false;
  timer16: any = 15;
  aswer16: any;
  intervalo16: any;
  inputsQuestion16Disable: boolean = false;
  view17: boolean = false;
  timer17: any = 15;
  aswer17: any;
  intervalo17: any;
  inputsQuestion17Disable: boolean = false;
  view18: boolean = false;
  timer18: any = 15;
  aswer18: any;
  intervalo18: any;
  inputsQuestion18Disable: boolean = false;
  view19: boolean = false;
  timer19: any = 15;
  aswer19: any;
  intervalo19: any;
  inputsQuestion19Disable: boolean = false;
  view20: boolean = false;
  timer20: any = 15;
  aswer20: any;
  intervalo20: any;
  inputsQuestion20Disable: boolean = false;
  constructor() { }


  ngOnInit() { }
  onNext() {
    switch (this.nextCount) {
      case 1:
        if (this.inputsQuestion1Disable) {
          this.view1 = false;
          this.view2 = true;
          this.buttonNext = false;
          this.intervalo2 = setInterval(() => {
            this.timer02--;
            if (this.timer02 == 0) {
              clearInterval(this.intervalo2);
              this.aswer2 = 0;
              this.inputsQuestion2Disable = true;
              this.onNext();
            }
          }, 1000);
          this.nextCount++;
        } else if (!this.intervalo1) {
          this.buttonNext = true;
          this.intervalo1 = setInterval(() => {
            this.timer01--;
            if (this.timer01 == 0) {
              clearInterval(this.intervalo1);
              this.aswer1 = 0;
              this.inputsQuestion1Disable = true;
              this.onNext();
            }
          }, 1000);
        }
        break;
      case 2:
        this.buttonNext = false;
        if (this.inputsQuestion2Disable) {
          this.view2 = false;
          this.view3 = true;
          this.buttonNext = true;
          this.intervalo3 = setInterval(() => {
            this.timer03--;
            if (this.timer03 == 0) {
              clearInterval(this.intervalo3);
              this.aswer3 = 0;
              this.inputsQuestion3Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 3:
        this.buttonNext = false;
        if (this.inputsQuestion3Disable) {
          this.view3 = false;
          this.view4 = true;
          this.buttonNext = true;
          this.intervalo4 = setInterval(() => {
            this.timer04--;
            if (this.timer04 == 0) {
              clearInterval(this.intervalo4);
              this.aswer4 = 0;
              this.inputsQuestion4Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 4:
        this.buttonNext = false;
        if (this.inputsQuestion4Disable) {
          this.view4 = false;
          this.view5 = true;
          this.buttonNext = true;
          this.intervalo5 = setInterval(() => {
            this.timer05--;
            if (this.timer05 == 0) {
              clearInterval(this.intervalo5);
              this.aswer5 = 0;
              this.inputsQuestion5Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 5:
        this.buttonNext = false;
        if (this.inputsQuestion5Disable) {
          this.view5 = false;
          this.view6 = true;
          this.buttonNext = true;
          this.intervalo6 = setInterval(() => {
            this.timer06--;
            if (this.timer06 == 0) {
              clearInterval(this.intervalo6);
              this.aswer6 = 0;
              this.inputsQuestion6Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 6:
        this.buttonNext = false;
        if (this.inputsQuestion6Disable) {
          this.view6 = false;
          this.view7 = true;
          this.buttonNext = true;
          this.intervalo7 = setInterval(() => {
            this.timer07--;
            if (this.timer07 == 0) {
              clearInterval(this.intervalo7);
              this.aswer7 = 0;
              this.inputsQuestion7Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 7:
        this.buttonNext = false;
        if (this.inputsQuestion7Disable) {
          this.view7 = false;
          this.view8 = true;
          this.buttonNext = true;
          this.intervalo8 = setInterval(() => {
            this.timer08--;
            if (this.timer08 == 0) {
              clearInterval(this.intervalo8);
              this.aswer8 = 0;
              this.inputsQuestion8Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 8:
        this.buttonNext = false;
        if (this.inputsQuestion8Disable) {
          this.view8 = false;
          this.view9 = true;
          this.buttonNext = true;
          this.intervalo9 = setInterval(() => {
            this.timer09--;
            if (this.timer09 == 0) {
              clearInterval(this.intervalo9);
              this.aswer9 = 0;
              this.inputsQuestion9Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 9:
        this.buttonNext = false;
        if (this.inputsQuestion9Disable) {
          this.view9 = false;
          this.view10 = true;
          this.buttonNext = true;
          this.intervalo10 = setInterval(() => {
            this.timer10--;
            if (this.timer10 == 0) {
              clearInterval(this.intervalo10);
              this.aswer10 = 0;
              this.inputsQuestion10Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 10:
        this.buttonNext = false;
        if (this.inputsQuestion10Disable) {
          this.view10 = false;
          this.view11 = true;
          this.buttonNext = true;
          this.intervalo11 = setInterval(() => {
            this.timer11--;
            if (this.timer11 == 0) {
              clearInterval(this.intervalo11);
              this.aswer11 = 0;
              this.inputsQuestion11Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 11:
        this.buttonNext = false;
        if (this.inputsQuestion11Disable) {
          this.view11 = false;
          this.view12 = true;
          this.buttonNext = true;
          this.intervalo12 = setInterval(() => {
            this.timer12--;
            if (this.timer12 == 0) {
              clearInterval(this.intervalo12);
              this.aswer12 = 0;
              this.inputsQuestion12Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 12:
        this.buttonNext = false;
        if (this.inputsQuestion12Disable) {
          this.view12 = false;
          this.view13 = true;
          this.buttonNext = true;
          this.intervalo13 = setInterval(() => {
            this.timer13--;
            if (this.timer13 == 0) {
              clearInterval(this.intervalo13);
              this.aswer13 = 0;
              this.inputsQuestion13Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 13:
        this.buttonNext = false;
        if (this.inputsQuestion13Disable) {
          this.view13 = false;
          this.view14 = true;
          this.buttonNext = true;
          this.intervalo14 = setInterval(() => {
            this.timer14--;
            if (this.timer14 == 0) {
              clearInterval(this.intervalo14);
              this.aswer14 = 0;
              this.inputsQuestion14Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 14:
        this.buttonNext = false;
        if (this.inputsQuestion14Disable) {
          this.view14 = false;
          this.view15 = true;
          this.buttonNext = true;
          this.intervalo15 = setInterval(() => {
            this.timer15--;
            if (this.timer15 == 0) {
              clearInterval(this.intervalo15);
              this.aswer15 = 0;
              this.inputsQuestion15Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 15:
        this.buttonNext = false;
        if (this.inputsQuestion15Disable) {
          this.view15 = false;
          this.view16 = true;
          this.buttonNext = true;
          this.intervalo16 = setInterval(() => {
            this.timer16--;
            if (this.timer16 == 0) {
              clearInterval(this.intervalo16);
              this.aswer16 = 0;
              this.inputsQuestion16Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 16:
        this.buttonNext = false;
        if (this.inputsQuestion16Disable) {
          this.view16 = false;
          this.view17 = true;
          this.buttonNext = true;
          this.intervalo17 = setInterval(() => {
            this.timer17--;
            if (this.timer17 == 0) {
              clearInterval(this.intervalo17);
              this.aswer17 = 0;
              this.inputsQuestion17Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 17:
        this.buttonNext = false;
        if (this.inputsQuestion17Disable) {
          this.view17 = false;
          this.view18 = true;
          this.buttonNext = true;
          this.intervalo18 = setInterval(() => {
            this.timer18--;
            if (this.timer18 == 0) {
              clearInterval(this.intervalo18);
              this.aswer18 = 0;
              this.inputsQuestion18Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 18:
        this.buttonNext = false;
        if (this.inputsQuestion18Disable) {
          this.view18 = false;
          this.view19 = true;
          this.buttonNext = true;
          this.intervalo19 = setInterval(() => {
            this.timer19--;
            if (this.timer19 == 0) {
              clearInterval(this.intervalo19);
              this.aswer19 = 0;
              this.inputsQuestion19Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
      case 19:
        this.buttonNext = false;
        if (this.inputsQuestion19Disable) {
          this.view19 = false;
          this.view20 = true;
          this.buttonNext = true;
          this.intervalo20 = setInterval(() => {
            this.timer20--;
            if (this.timer20 == 0) {
              clearInterval(this.intervalo20);
              this.aswer20 = 0;
              this.inputsQuestion20Disable = true;
            }
          }, 1000);
          this.nextCount++;
        }
        break;
    }
  }
  onStartQuiz() {
    this.startQuiz = true;
    this.view1 = true;
    this.onNext();
  }
  onFinishQuiz(){

  }
  question1(aswer) {
    this.aswer1 = (aswer) ? 1 : 0;
    this.inputsQuestion1Disable = true;
    clearInterval(this.intervalo1);
  }
  question2(aswer) {
    this.aswer2 = (aswer) ? 1 : 0;
    this.inputsQuestion2Disable = true;
    clearInterval(this.intervalo2);
  }
  question3(aswer) {
    this.aswer3 = (aswer) ? 1 : 0;
    this.inputsQuestion3Disable = true;
    clearInterval(this.intervalo3);
  }
  question4(aswer) {
    this.aswer4 = (aswer) ? 1 : 0;
    this.inputsQuestion4Disable = true;
    clearInterval(this.intervalo4);
  }
  question5(aswer) {
    this.aswer5 = (aswer) ? 1 : 0;
    this.inputsQuestion5Disable = true;
    clearInterval(this.intervalo5);
  }
  question6(aswer) {
    this.aswer6 = (aswer) ? 1 : 0;
    this.inputsQuestion6Disable = true;
    clearInterval(this.intervalo6);
  }
  question7(aswer) {
    this.aswer7 = (aswer) ? 1 : 0;
    this.inputsQuestion7Disable = true;
    clearInterval(this.intervalo7);
  }
  question8(aswer) {
    this.aswer8 = (aswer) ? 1 : 0;
    this.inputsQuestion8Disable = true;
    clearInterval(this.intervalo8);
  }
  question9(aswer) {
    this.aswer9 = (aswer) ? 1 : 0;
    this.inputsQuestion9Disable = true;
    clearInterval(this.intervalo9);
  }
  question10(aswer) {
    this.aswer10 = (aswer) ? 1 : 0;
    this.inputsQuestion10Disable = true;
    clearInterval(this.intervalo10);
  }
  question11(aswer) {
    this.aswer11 = (aswer) ? 1 : 0;
    this.inputsQuestion11Disable = true;
    clearInterval(this.intervalo11);
  }
  question12(aswer) {
    this.aswer12 = (aswer) ? 1 : 0;
    this.inputsQuestion12Disable = true;
    clearInterval(this.intervalo12);
  }
  question13(aswer) {
    this.aswer13 = (aswer) ? 1 : 0;
    this.inputsQuestion13Disable = true;
    clearInterval(this.intervalo13);
  }
  question14(aswer) {
    this.aswer14 = (aswer) ? 1 : 0;
    this.inputsQuestion14Disable = true;
    clearInterval(this.intervalo14);
  }
  question15(aswer) {
    this.aswer15 = (aswer) ? 1 : 0;
    this.inputsQuestion15Disable = true;
    clearInterval(this.intervalo15);
  }
  question16(aswer) {
    this.aswer16 = (aswer) ? 1 : 0;
    this.inputsQuestion16Disable = true;
    clearInterval(this.intervalo16);
  }
  question17(aswer) {
    this.aswer17 = (aswer) ? 1 : 0;
    this.inputsQuestion17Disable = true;
    clearInterval(this.intervalo17);
  }
  question18(aswer) {
    this.aswer18 = (aswer) ? 1 : 0;
    this.inputsQuestion18Disable = true;
    clearInterval(this.intervalo18);
  }
  question19(aswer) {
    this.aswer19 = (aswer) ? 1 : 0;
    this.inputsQuestion19Disable = true;
    clearInterval(this.intervalo19);
  }
  question20(aswer) {
    this.aswer20 = (aswer) ? 1 : 0;
    this.inputsQuestion20Disable = true;
    clearInterval(this.intervalo20);
  }
}
