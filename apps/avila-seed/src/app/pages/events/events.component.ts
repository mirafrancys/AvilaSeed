import { Component, OnInit } from '@angular/core';
import { IEventDto } from '../../core/models/iEventDto';
import { ProductGateway } from '../../core/gateways/product.gateway';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: IEventDto[] = [];

  constructor(
    private productGateway: ProductGateway
  ){}

  ngOnInit(): void {
    this.productGateway.getEvents('fr').subscribe(res => this.events = res);
  }
}
