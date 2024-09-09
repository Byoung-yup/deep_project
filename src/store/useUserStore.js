import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    isAuthenticated: false,
    userId: "",
    nickname: "",
  },

  login: (userInfo) =>
    set((state) => ({
      user: {
        isAuthenticated: true,
        ...userInfo,
      },
    })),

  logout: set((state) => ({
    user: {
      isAuthenticated: false,
      ...state.user,
    },
  })),
}));

export default useUserStore;
