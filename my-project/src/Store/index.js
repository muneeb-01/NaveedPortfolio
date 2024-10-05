import { create } from "zustand";
import { createAuthSlice } from "./Slice/authSlice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
}));
