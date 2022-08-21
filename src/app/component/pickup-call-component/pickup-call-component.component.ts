import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-component',
  templateUrl: './pickup-call-component.component.html',
  styleUrls: ['./pickup-call-component.component.scss'],
})
export class PickupCallComponentComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
