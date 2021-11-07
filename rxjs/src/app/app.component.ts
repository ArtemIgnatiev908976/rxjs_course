import { Component } from '@angular/core';
import {interval, Subscription, Observable, observable} from 'rxjs'
import {map, filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub: Subscription

constructor() {
const stream$ = new Observable(observer =>{

  setTimeout(()=>{
    observer.next(1)}
  , 1500)


  setTimeout(()=>{
      observer.complete()}
    , 2100)


  setTimeout(()=>{
      observer.error('Something went wrong')}
    , 1500)

  setTimeout(()=>{
      observer.next(2)}
    , 2500)
})


 this.sub = stream$
    .subscribe(
      value => console.log('Next:', value),
      () => console.log('Completed')
)
}


stop(){
this.sub.unsubscribe()
}
}
