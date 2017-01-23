import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sherriff',
  templateUrl: 'sherriff.component.html'
})

export class SherriffComponent implements OnInit {

  playerName: string;
  totals: Object = {
    apples: null,
    cheese: null,
    bread: null,
    chickens: null
  }


  ngOnInit(): void {
    return;
  }
}
