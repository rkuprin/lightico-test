import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ItemComponent } from './components/progressbar/item/item.component';
import { StepOneComponent } from './components/steps/step-one/step-one.component';
import { StepTwoComponent } from './components/steps/step-two/step-two.component';
import { StepThreeComponent } from './components/steps/step-three/step-three.component';
import { StepFourComponent } from './components/steps/step-four/step-four.component';
import { StepFiveComponent } from './components/steps/step-five/step-five.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    ItemComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
