import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }

  ngOnInit(): void {}
}
