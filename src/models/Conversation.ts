import { Base } from "./Base";

export class Conversation extends Base {
  constructor(
    public AvatarId: number,
    public ScriptId: number
  ) {
    super();
  }
}
