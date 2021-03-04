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

  get progressWidth() {
    const width = Math.round(
      (100 / this.state.steps.length) * this.state.currentStepIndex
    );
    return `calc(${width}% - 40px)`;
  }

  ngOnInit(): void {}
}
