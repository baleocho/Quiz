import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { answers} from '../models/ansers-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAnswers(){
    return this.http.get('http://localhost:3000/api/aswers');
  }
  getAnswer(id: number){
    return this.http.get('http://localhost:3000/api/aswers/' + id);
  }
  postAnswers(answers: answers){
    return this.http.post('http://localhost:3000/api/aswers' , answers);
  }
}
