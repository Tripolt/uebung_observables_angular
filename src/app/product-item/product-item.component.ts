import { Component } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  addItem():void{ {
    return new MainService().addItem();
  }}
  removeItem():void{ {
    return new MainService().removeItem();
  }}
}
