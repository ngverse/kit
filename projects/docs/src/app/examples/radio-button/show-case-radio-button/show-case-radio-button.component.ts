import { RadioButtonComponent } from '@/ui/radio-button/radio-button.component';
import { RadioGroupComponent } from '@/ui/radio-button/radio-group.component';
import { Component, model } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'doc-show-case-radio-button',
  imports: [
    RadioButtonComponent,
    RadioGroupComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './show-case-radio-button.component.html',
  styleUrl: './show-case-radio-button.component.css',
})
export class ShowCaseRadioButtonComponent {
  values = [
    {
      firstName: 'Apple',
      price: 30,
    },
    {
      firstName: 'Orange',
      price: 70,
    },
    {
      firstName: 'Cherry',
      price: 100,
    },
  ];
  val = model(this.values[0]);

  compare(o1: { price: number }, o2: { price: number }) {
    return o1?.price === o2.price;
  }
}
