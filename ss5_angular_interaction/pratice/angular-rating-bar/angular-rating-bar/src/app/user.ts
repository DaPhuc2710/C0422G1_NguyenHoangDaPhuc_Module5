import {Country} from "./country";

export interface User {
  email: string,
  password: string,
  country: Country,
  age: number,
  sex: string,
  phone: string,
}
