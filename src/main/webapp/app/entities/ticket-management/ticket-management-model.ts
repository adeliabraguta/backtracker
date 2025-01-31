import { IProject } from "../projects-management/projects-management.model";
import { IUser } from "../../admin/user-management/user-management.model";
import { ILabel } from "../labels-management/labels-management.model";

export interface ITicket {
  id: number | null;
  title: string | null;
  description: string | null;
  dueDate: string | null;
  done: boolean | null;
  project: IProject | null;
  assignedTo: IUser | null;
  labels: ILabel[] | null;
}

export class Ticket implements ITicket {
  constructor(
    public id: number | null,
    public title: string | null,
    public description: string | null,
    public dueDate: string | null,
    public done: boolean | null,
    public project: IProject | null,
    public assignedTo: IUser | null,
    public labels: ILabel[] | null
  ) {}
}
