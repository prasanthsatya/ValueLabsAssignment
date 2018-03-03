///<reference path="../../../node_modules/@angular/core/src/metadata/view.d.ts"/>
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-left-panel-component',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
