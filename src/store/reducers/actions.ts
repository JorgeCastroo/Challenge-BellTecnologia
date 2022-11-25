import { action } from "typesafe-actions";
import { UserType, User } from "./types";

export const updateUser = (data: User) => action(UserType.UPDATE_USER, data);
