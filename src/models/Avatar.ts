import { Base } from "./Base";

export class Avatar extends Base {
  constructor(
    public FirstName: string,
    public LastName: string,
    public Age: string,
    public Situation: string,
    public Type: string
  ) {
    super();
  }
}
