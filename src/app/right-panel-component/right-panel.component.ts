import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightPanelComponent implements OnInit {
  zoomin: number;

  constructor() {
    this.zoomin = 100;
  }

  ngOnInit() {
    
  }
}
