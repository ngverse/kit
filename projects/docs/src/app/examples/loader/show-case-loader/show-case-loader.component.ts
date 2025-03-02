import { ButtonComponent } from '@/ui/button/button.component';
import { CardComponent } from '@/ui/card/card.component';
import { FormFieldComponent } from '@/ui/form-field/form-field.component';
import { InputDirective } from '@/ui/input/input.directive';
import { LoaderComponent } from '@/ui/loader/loader.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'doc-show-case-loader',
  imports: [
    LoaderComponent,
    ButtonComponent,
    FormFieldComponent,
    InputDirective,
    ButtonComponent,
    CardComponent,
  ],
  templateUrl: './show-case-loader.component.html',
  styleUrl: './show-case-loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseLoaderComponent {
  showLoader = signal(false);

  show() {
    this.showLoader.set(true);
    setTimeout(() => {
      this.showLoader.set(false);
    }, 3000);
  }
}
