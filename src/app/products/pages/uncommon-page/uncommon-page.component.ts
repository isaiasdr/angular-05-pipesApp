import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Isaias';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Paola';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Paola', 'Isaias', 'Angel', 'Richard', 'Diego', 'Ricardo', 'Vanessa', 'Alexandra'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Isaias',
    age: 26,
    address: 'Caracas, Venezuela'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })
}
