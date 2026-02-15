import { createContext } from "react";

export const UserDetailContext = createContext<any>({
  UserDetail: undefined,
  SetUserDetail: () => {},
});
