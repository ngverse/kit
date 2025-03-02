import { Injectable } from '@angular/core';

export type SOURCE_FILE_EXTENSION_TYPE = 'ts' | 'html' | 'css' | 'spec.ts';

export interface SourceTreeFolder {
  name: string;
  files: SourceTreeFile[];
  hideName?: boolean;
}

export interface SourceTreeFile {
  name: string;
  path: string;
  language: SOURCE_FILE_EXTENSION_TYPE;
}

@Injectable({
  providedIn: 'root',
})
export class SourceTreeBuilder {
  sourceTree(root: string, folders: (root: string) => SourceTreeFolder[]) {
    return folders(root);
  }

  directive(
    name: string,
    root: string,
    includeSpec?: boolean
  ): SourceTreeFile[] {
    const tsFile = {
      name: `${name}.directive.ts`,
      path: `ngverse/${root}/${name}.directive.ts`,
      language: 'ts' as const,
    };
    if (includeSpec) {
      return [
        tsFile,
        {
          name: `${name}.directive.spec.ts`,
          path: `ngverse/${root}/${name}.directive.spec.ts`,
          language: 'ts',
        },
      ];
    }
    return [tsFile];
  }

  file(
    name: string,
    rootPath: string,
    extension: SOURCE_FILE_EXTENSION_TYPE = 'ts'
  ) {
    return {
      name: `${name}.${extension}`,
      path: `ngverse/${rootPath}/${name}.${extension}`,
      language: extension,
    };
  }

  component(
    name: string,
    rootPath: string,
    extension: SOURCE_FILE_EXTENSION_TYPE = 'ts'
  ) {
    return {
      name: `${name}.component.${extension}`,
      path: `ngverse/${rootPath}/${name}.component.${extension}`,
      language: extension,
    };
  }

  fullComponent(name: string, rootPath: string): SourceTreeFile[] {
    return [
      this.component(name, rootPath, 'ts'),
      this.component(name, rootPath, 'html'),
      this.component(name, rootPath, 'css'),
      this.component(name, rootPath, 'spec.ts'),
    ];
  }

  service(name: string, rootPath: string) {
    return [
      this.file(`${name}.service`, rootPath, 'ts'),
      this.file(`${name}.service`, rootPath, 'spec.ts'),
    ];
  }

  fullInlineComponent(name: string, rootPath: string): SourceTreeFile[] {
    return [
      this.component(name, rootPath, 'ts'),
      this.component(name, rootPath, 'spec.ts'),
    ];
  }

  inlineComponent(name: string, rootPath: string): SourceTreeFile[] {
    return [
      this.component(name, rootPath, 'ts'),
      this.component(name, rootPath, 'css'),
      this.component(name, rootPath, 'spec.ts'),
    ];
  }

  folder(
    name: string,
    root: string,
    files: (root: string) => SourceTreeFile[],
    hideName?: boolean
  ) {
    return {
      name: name,
      files: files(root),
      hideName,
    };
  }
}
