import { Component, Input, OnInit } from '@angular/core';
import { WizardStep } from 'src/app/models/wizard-state.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() step!: WizardStep;
  constructor() {}

  ngOnInit(): void {}
}
