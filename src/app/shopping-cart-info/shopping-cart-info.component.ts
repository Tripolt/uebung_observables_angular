import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-shopping-cart-info',
  templateUrl: './shopping-cart-info.component.html',
  styleUrls: ['./shopping-cart-info.component.css']
})

export class ShoppingCartInfoComponent implements OnInit {
    itemsCount: number | undefined;
  
    constructor(private mainService: MainService) { }
  
    ngOnInit(): void {
      this.mainService.getItemsCountObservable().subscribe(count => {
        this.itemsCount = count;
      });
    }
  }
