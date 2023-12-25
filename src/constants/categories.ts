import { ISubCategories } from "./subCategories";

export interface ICategories {
  id: number;
  name: string;
  link: string;
  subCategories: ISubCategories[];
}

export const dummyCategories = [
  {
    id: 0,
    name: "phones",
  },
  {
    id: 1,
    name: "ear-phones",
  },
  {
    id: 2,
    name: "computers",
  },
];
