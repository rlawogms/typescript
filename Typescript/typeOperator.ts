// Union 연산자
const a1: string | number = 123; //문자도 가능
const a2: Element | null = document.querySelector('.box');
const a3: () => number = () => 1;

// 마라탕: {재료들:string[], 가격:string or number }
const maratang: { ingredients: string[]; price: number | string } = {
  ingredients: ['숙주', '포주', '버섯'],
  price: '7500원',
};

// Intersection 연산자 [교집합]
const pizza: { size: string } & { toppings: string[] } & { eat: () => void } = {
  size: 'L',
  toppings: ['버섯', '치즈', '페페로니'],
  eat: () => {
    console.log('피자꿀맛');
  },
};
