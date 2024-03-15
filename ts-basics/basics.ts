// 기본형

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isTrue: boolean;

isTrue = true;

// 복잡한 자료형

let hobbies: string[]; //문자형 배열 타입

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32
};

let people: {
  name: string;
  age: number;

}[];

people = [
  {
    name: 'Max',
    age: 32
  },
  {
    name: 'asd',
    age: 2
  }
]

// 타입 추론
// 명시적인 타입 표기 없이 할당된 값을 기반한 추론으로 string 타입으로 지정

let course = 'React - The Complete Guide';

// course = 12341;

// union 타입
let skill: string | number = 'React';

skill = 'vue';

skill = 123;

// 타입 별칭

type Person = {
  name: string;
  age: number;
}

let family: Person[];

family = [
  {
    name: 'aaa',
    age: 123
  }
]

// 타입을 가진 함수
// 반환 값의 타입도 생각해야 함
function add(a: number, b: number) {
  return a + b;
}


// void 타입은 null, undefined와 비슷하지만
// 항상 함수와 결합해서 사용한다는 특징이 있음
function printOut(value: any) {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');
stringArray[0].split('');