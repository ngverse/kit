import { Component, inject } from '@angular/core';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { SourceTreeBuilder } from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';

@Component({
  selector: 'doc-outside-click-page',
  imports: [BlueprintPageComponent, SourceTreeComponent],
  templateUrl: './outside-click-page.component.html',
  styleUrl: './outside-click-page.component.css',
})
export class OutsideClickPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = this.sourceTreeBuilder.sourceTree('outside-click', (root) => [
    this.sourceTreeBuilder.folder(
      root,
      root,
      () => [...this.sourceTreeBuilder.directive(root, root)],
      true
    ),
  ]);
}
