import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: "Mr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class='heroes'>
      <li *ngFor='let hero of heroes'>
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details</h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})
export class AppComponent{
  title = 'Tour or Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
}
