import { Component, inject, input, Input, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  categoryTypeId: number = 0;
  @Input({alias: 'id', required: true}) set setCategoryTypeId(value: number){
    this.categoryTypeId = value;
  };
  

  ngOnInit(): void {
  }
}
