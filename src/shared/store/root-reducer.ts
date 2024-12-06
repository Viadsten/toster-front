import { userReducer } from "@/slices/user/user-slice";
import { NameSpace } from "@/slices/user/types";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [NameSpace.User]: userReducer,
});
