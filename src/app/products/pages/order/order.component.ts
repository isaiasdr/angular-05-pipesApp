import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ];

  public orderBy?: keyof Hero | '' = '';

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder( orderType: keyof Hero ) {
    this.orderBy = orderType;
  }
}
