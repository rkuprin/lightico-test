export interface WizardState {
  steps: WizardStep[];
  currentStepIndex: number;
}

export interface WizardStep {
  index: number;
  label?: string;
  title?: string;
  currentStep: boolean;
  completed?: boolean;
  touched?: boolean;
}
