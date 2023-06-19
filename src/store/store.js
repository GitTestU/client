import { create } from "zustand";

export const useStateManage = create((set) => ({
  isLoggedIn: false,
  setLoggedIn: (e) => set(() => ({ isLoggedIn: e })),

  addCar: false,
  setAddCar: (e) => set(() => ({ addCar: e })),

  brand: "",
  setBrand: (e) => set(() => ({ brand: e })),

  model: "",
  setModel: (e) => set(() => ({ model: e })),

  modelYear: "",
  setModelYear: (e) => set(() => ({ modelYear: e })),

  rentPrice: "",
  setRentPrice: (e) => set(() => ({ rentPrice: e })),

  selectedImage: null,
  setSelectedImage: (e) => set(() => ({ selectedImage: e })),

  cardNumber1: "",
  setCardNumber1: (e) => set(() => ({ cardNumber1: e })),

  cardNumber2: "",
  setCardNumber2: (e) => set(() => ({ cardNumber2: e })),

  cardNumber3: "",
  setCardNumber3: (e) => set(() => ({ cardNumber3: e })),

  cardNumber4: "",
  setCardNumber4: (e) => set(() => ({ cardNumber4: e })),

  cardHolder: "",
  setCardHolder: (e) => set(() => ({ cardHolder: e })),

  expairDate1: "",
  setExpairDate1: (e) => set(() => ({ expairDate1: e })),

  expairDate2: "",
  setExpairDate2: (e) => set(() => ({ expairDate2: e })),

  ccv: "",
  setCcv: (e) => set(() => ({ ccv: e })),
}));
