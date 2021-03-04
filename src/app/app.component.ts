import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { WizardState } from './models/wizard-state.model';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private subs = new SubSink();
  state!: WizardState;
  nextDisabled: boolean = false;
  prevDisabled: boolean = true;

  constructor(private service: StateService) {}

  ngOnInit() {
    this.subs.sink = this.service.wizardState$.subscribe((state) => {
      this.state = state;

      if (state.currentStepIndex === state.steps.length - 1)
        this.nextDisabled = true;
      else this.nextDisabled = false;

      if (state.currentStepIndex === 0) this.prevDisabled = true;
      else this.prevDisabled = false;
    });
  }

  onStepChange(action: 'plus' | 'minus'): void {
    const step = {
      ...this.state.steps[this.state.currentStepIndex],
      touched: true,
    };

    this.service.stepChange(step, action);
  }
}
