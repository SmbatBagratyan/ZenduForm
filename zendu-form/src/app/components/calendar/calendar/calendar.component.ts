import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Output() yearChange: EventEmitter<number> = new EventEmitter();
  @Output() monthChange: EventEmitter<number> = new EventEmitter();
  @Output() dayChange: EventEmitter<number> = new EventEmitter();

  openYearPicker = false;
  selectedYear: any;
  selectedMonth: string;
  selectedDay: any;
  selectedMonthIndex = 0;
  selectedOption = 'Select Status';


  listOfYears = [];
  monthsLsit = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  daysLsit = [];

  constructor() { }

  ngOnInit() {
    this.getYears();

    this.selectedYear = new Date().getFullYear();
    this.yearChange.emit(this.selectedYear);

    if (this.monthsLsit) {
      this.selectedMonthIndex = new Date().getUTCMonth();
      this.selectedMonth = this.monthsLsit[this.selectedMonthIndex];
    }

    this.getDays(this.selectedMonthIndex, this.selectedYear);

  }

  getYears() {
    let currentYear;
    currentYear = new Date().getUTCFullYear();
    for (let i = 0; i < 50; i++) {
      currentYear = parseInt(currentYear, 10);
      this.listOfYears.push('' + (currentYear + i));
    }
  }

  selectOption(option) {
    this.selectedOption = option;
  }

  selectYear(year) {
    this.selectedYear = year;
    this.yearChange.emit(year);
    this.getDays(this.selectedMonthIndex, this.selectedYear);

  }

  changeMonth(value: string) {
    if (value === 'increase') {

      this.selectedMonthIndex++;

      if (this.selectedMonthIndex > 11) {
        this.selectedMonthIndex = 0;
        this.selectedMonth = this.monthsLsit[this.selectedMonthIndex];
        this.selectedYear = parseInt(this.selectedYear, 10) + 1;
      } else {
        this.selectedMonth = this.monthsLsit[this.selectedMonthIndex];
      }

    } else {

      this.selectedMonthIndex--;

      if (this.selectedMonthIndex < 0) {
        this.selectedMonthIndex = 11;
        this.selectedMonth = this.monthsLsit[this.selectedMonthIndex];
        this.selectedYear = parseInt(this.selectedYear, 10) - 1;
      } else {
        this.selectedMonth = this.monthsLsit[this.selectedMonthIndex];
      }

    }

    this.monthChange.emit(this.selectedMonthIndex);
    this.getDays(this.selectedMonthIndex, this.selectedYear);
  }

  getDays(month, year) {

    month = month + 1;
    this.daysLsit = [];
    const dayNumber = new Date(year, month, 0).getDate();

    for (let i = 1; i <= dayNumber; i++) {
      this.daysLsit.push(i);
    }
  }

  selectDay(day) {
    this.dayChange.emit(day);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }


}
