import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule, DatePipe]
})
export class FooterComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

}
