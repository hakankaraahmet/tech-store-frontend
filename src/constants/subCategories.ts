export interface ISubCategories {
  id: number;
  category: string;
  name: string;
}

export const dummySubCategories: ISubCategories[] = [
  {
    id: 0,
    category: "phones",
    name: "android-phones",
  },
  {
    id: 1,
    category: "phones",
    name: "ios-phones",
  },
  {
    id: 2,
    category: "ear-phones",
    name: "ear-buds",
  },
  {
    id: 3,
    category: "ear-phones",
    name: "head-phones",
  },
  {
    id: 4,
    category: "computers",
    name: "laptops",
  },
  {
    id: 5,
    category: "computers",
    name: "tablets",
  },
];
