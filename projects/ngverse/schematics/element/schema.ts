export interface Schema {
  // The name of the component.
  name: string;

  project: string;

  replace?: boolean;

  includeTests?: string;
}
