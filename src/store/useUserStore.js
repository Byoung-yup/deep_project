import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    isAuthenticated: false,
    userId: "",
    nickname: "",
  },

  login: (id, nickname) =>
    set((state) => ({
      user: {
        isAuthenticated: true,
        userId: id,
        nickname: nickname,
      },
    })),

  logout: () =>
    set((state) => ({
      user: {
        isAuthenticated: false,
        userId: "",
        nickname: "",
      },
    })),

  update: (nickname) =>
    set((state) => ({
      user: {
        ...state.user,
        nickname: nickname,
      },
    })),
}));

export default useUserStore;
