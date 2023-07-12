import { RFValue } from "react-native-responsive-fontsize";

export const GlobalSize = (size, refrenceHeight) => {
  const value = RFValue(size, refrenceHeight);
  return value;
};
