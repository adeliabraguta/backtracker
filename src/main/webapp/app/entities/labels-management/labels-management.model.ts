export interface ILabel {
  id: number | null;
  label: string | null;
}
export class Label implements ILabel {
  constructor(
    public id: number | null,
    public label: string,
  ) {}
}
