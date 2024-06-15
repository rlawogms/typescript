// optional
// subtract 함수 (a,b)
const subtract = (a: number, b?: number): number => {
  if (b === undefined) {
    return 0;
  } else {
    return a - b;
  }
};

// optional: ? undefined 일 수도 있음
type Food = {
  name: string;
  price: number;
  kcal?: number;
};

const lunch: Food = {
  name: '냉면',
  price: 9000,
  kcal: 300,
};

//keyof

type Course = {
  name: string;
  classroom: 'A' | 'B' | 'C';
};

type A = keyof Course
const test1:A = "name"
