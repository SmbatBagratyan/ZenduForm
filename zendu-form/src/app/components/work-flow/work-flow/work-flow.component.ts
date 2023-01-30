import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css']
})
export class WorkFlowComponent implements OnInit {

  @Input() from: string;
  @Input() to: string;
  @Input() date: string;
  @Input() status: string;


  constructor() { }

  ngOnInit() {
  }

}
