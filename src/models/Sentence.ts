import { BaseLabelized } from "./BaseLabelized";

export class Sentence extends BaseLabelized {
  constructor(public Score: number, public NextScriptId: number) {
    super();
  }
}
