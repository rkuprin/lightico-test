import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WizardState, WizardStep } from '../models/wizard-state.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private wizardState: BehaviorSubject<WizardState> = new BehaviorSubject<WizardState>(
    this.initWizard()
  );

  get wizardState$(): Observable<WizardState> {
    return this.wizardState.asObservable();
  }

  stepChange(stepData: WizardStep, action: string): void {
    const state = this.wizardState.value;
    const currentStep = state.steps[state.currentStepIndex];
    if (currentStep.index < state.steps.length && action === 'plus')
      state.currentStepIndex++;

    if (currentStep.index > 0 && action === 'minus') state.currentStepIndex--;

    state.steps[state.currentStepIndex].currentStep = true;
    state.steps[stepData.index] = {
      ...currentStep,
      ...stepData,
      currentStep: false,
    };
    this.wizardState.next(state);
  }

  constructor() {}

  initWizard(): WizardState {
    // here should be the init logic
    return {
      steps: [
        {
          index: 0,
          label: 'step-1',
          title: 'Step 1',
          completed: true,
          currentStep: true,
        },
        {
          index: 1,
          label: 'step-2',
          title: 'Step 2',
          completed: true,
          currentStep: false,
        },
        {
          index: 2,
          label: 'step-3',
          title: 'Step 3',
          completed: true,
          currentStep: false,
        },
        {
          index: 3,
          label: 'step-4',
          title: 'Step 4',
          completed: true,
          currentStep: false,
        },
        {
          index: 4,
          label: 'step-5',
          title: 'Step 5',
          completed: true,
          currentStep: false,
        },
      ],
      currentStepIndex: 0,
    };
  }
}
