import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { colors } from './demo/colors';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
	today: Date;

	constructor() {
		this.today = new Date('2020-02-05');
	}

	view: CalendarView = CalendarView.Month;

	viewDate: Date = new Date();
  
	events: CalendarEvent[] = [
		{	start: new Date('2020-2-15'),
			end: this.today,
			title: 'An event',
			color: colors.red
	  }
	];
  }