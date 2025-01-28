export interface IProject {
  id: number | null;
  name: string | null;
}
export class Project implements IProject {
  constructor(
    public id: number | null,
    public name: string,
  ) {}
}
