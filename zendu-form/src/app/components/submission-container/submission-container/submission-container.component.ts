import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submission-container',
  templateUrl: './submission-container.component.html',
  styleUrls: ['./submission-container.component.css']
})
export class SubmissionContainerComponent implements OnInit {

  listOfOptions = ['option 1' , 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  from: string;
  to: string;
  date: string;

  constructor() { }

  ngOnInit() {

    this.from = 'denisgordiyenya@gmail.com';
    this.to = 'denisgordiyenya@gmail.com';
    this.date = '06 ' + this.monthNames[11];

  }

}
