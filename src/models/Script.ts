import { BaseLabelized } from "./BaseLabelized";

export class Script extends BaseLabelized {
  constructor(public SentenceId: number, public AvatarId: number) {
    super();
  }
}
