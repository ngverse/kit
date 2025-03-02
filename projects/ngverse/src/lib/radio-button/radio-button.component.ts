import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  inject,
  input,
} from '@angular/core';
import { A11yRadioButtonDirective } from '@ngverse/kit';
import { RadioButtonIconComponent } from './radio-button-icon.component';
import { RadioGroupComponent } from './radio-group.component';

let inputId = 0;

function genInputId() {
  return `radio-button-${inputId++}`;
}

@Component({
  selector: 'app-radio-button',
  imports: [RadioButtonIconComponent, A11yRadioButtonDirective],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  disabled = input<boolean>();
  id = input(genInputId());
  value = input.required<unknown>();

  private radioGroup = inject<RadioGroupComponent>(
    forwardRef(() => RadioGroupComponent)
  );
  name = this.radioGroup.name;

  radioButtonDisabled = computed(() => {
    return this.disabled() || this.radioGroup.disabled();
  });

  selected = computed(() => {
    return this.radioGroup.isSelected(this.value());
  });

  toggle() {
    this.radioGroup.select(this.value());
  }
}
