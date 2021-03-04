import { Component, Input, OnInit } from '@angular/core';
import { WizardState } from 'src/app/models/wizard-state.model';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() state!: WizardState;

  constructor() {}

  ngOnInit(): void {}
}
