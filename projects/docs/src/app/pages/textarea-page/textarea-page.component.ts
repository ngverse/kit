import { Component, inject } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { CommandInstallationComponent } from '../../blueprint/command-installation/command-installation.component';
import { ShowCaseComponent } from '../../blueprint/show-case/show-case.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ShowCaseTextareaComponent } from '../../examples/textarea/show-case-textarea/show-case-textarea.component';
const ROOT = 'textarea';
@Component({
  selector: 'doc-textarea-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseTextareaComponent,
  ],
  templateUrl: './textarea-page.component.html',
  styleUrl: './textarea-page.component.css',
})
export class TextareaPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);

  sourceTree: SourceTreeFolder[] = [
    {
      name: 'textarea',
      files: [...this.sourceTreeBuilder.directive(ROOT, ROOT, true)],
      hideName: true,
    },
  ];

  apiInfo: ApiInfo = {
    ariaDescription:
      'The Textarea directive uses the native <textarea> element as its host, making all accessibility features readily available.',
    stylesInGlobal: true,
    entities: [
      {
        name: 'TextareaDirective',
        type: 'directive',
        selector: 'textarea[appTextarea]',
        inputs: [
          {
            name: 'resize',
            type: 'none | both | horizontal | vertical | block | inline',
            description: 'resize type',
            default: 'none',
          },
        ],
      },
    ],
  };
}
