import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() calendar = false;
  @Input() listOfOptions: Array<string>;

  date: Date;

  currentMonth: Date;

  isOpen = false;
  selectedOption: any;


  constructor() { }

  ngOnInit() {
    if (!this.calendar) {
      this.selectedOption = 'Select Status';
    } else {

    }
  }

  setYear(event?: Event) {

      const date = new Date();
      let day;
      let month;

      day = date.getDate();
      day = day < 9 ? '0' + day : day;

      month = date.getUTCMonth() + 1;
      month = month < 9 ? '0' + month : month;

      this.selectedOption = day + '/' + month + '/' + event;

  }

  setDay(event) {
    let day = event;
    day = day < 9 ? '0' + day : day;
    this.selectedOption = String(this.selectedOption).substring(2, String(this.selectedOption).length);
    this.selectedOption = day + this.selectedOption;
  }

  setMonth(event) {
    let month = event + 1;
    month = month < 9 ? '0' + month : month;

    const firstPart = String(this.selectedOption).substring(0, 3);
    const secondPart =  String(this.selectedOption).substring(5, String(this.selectedOption).length);
    this.selectedOption = firstPart + month + secondPart;

  }

  selectOption(option) {
    this.selectedOption = option;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
