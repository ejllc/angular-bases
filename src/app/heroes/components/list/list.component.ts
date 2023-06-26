import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deletedHero?: string = '';
  public heoresNames: string[] = [
    'Spiderman',
    'Hulk',
    'Ironman',
    'Thor'
  ];

  removeLastHero(): void {
    this.deletedHero = this.heoresNames.pop();
  }

}
