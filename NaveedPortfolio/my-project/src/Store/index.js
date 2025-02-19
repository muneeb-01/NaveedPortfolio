import { create } from "zustand";
import { createAuthSlice } from "./Slice/authSlice";
<<<<<<< HEAD

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
=======
import { createParagraphSlice } from "./Slice/paragraphSlice";
import {createProjectSlice} from "./Slice/projectSlice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createParagraphSlice(...a),
  ...createProjectSlice(...a)
>>>>>>> e504340 (updated repository using laptop)
}));
