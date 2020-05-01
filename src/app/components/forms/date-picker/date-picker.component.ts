import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  constructor() {}
  minDate = new Date();
  maxDate = new Date(2019, 3, 20); // yyyy, mm, date month starts from 0

  dateFilter = (date) => {
    const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  ngOnInit(): void {}
}
