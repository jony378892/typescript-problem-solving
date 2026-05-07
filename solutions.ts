// Problem 1
const filterEvenNumbers = (array: number[]): number[] => {
  const newArray: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Problem 2
const reverseString = (str: string): string => {
  let newStr = "";

  for (let i of str) {
    newStr = i + newStr;
  }

  return newStr;
};

// Problem 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};

//Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (book: Book): Book => {
  return {
    ...book,
    isRead: true,
  };
};

toggleReadStatus({
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
});

// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const newArray: number[] = [];

  for (let i of arr1) {
    for (let j of arr2) {
      if (j === i) {
        newArray.push(j);
        break;
      }
    }
  }

  return newArray;
};
