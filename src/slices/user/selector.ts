import { State } from "@/shared/store";
import { NameSpace } from "./types";

export const selectUser = (state: Pick<State, typeof NameSpace.User>) =>
  state[NameSpace.User];
