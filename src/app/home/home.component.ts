/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public viewChild:any
  @Input() counter: any;
  @Input() counter1!:number;
  ngOnInit(): void {
    console.log('hello');
  }
  set counterValue(value: any) {
    console.log('new value', value);
    this.counter = value;
  }
  get counterValue() {
    return this.counter;
  }
  public current:any

  ngOnChanges(_simpleChange: any) {
    

    this.current=JSON.stringify(_simpleChange['counter']);
    console.log(this.current)
    console.log(_simpleChange['counter'], _simpleChange.currentValue, _simpleChange.firstChange);
  }
}
