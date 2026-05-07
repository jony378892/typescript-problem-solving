# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

`Generics` is a typescript feature which help us to write a function for inferring a type of any parameter passed into the function. It usually helps us to reuse the logic of any functions or classes without repeating the code.

## What is generics?

Generics are a feature in Typescript that allow functions, classes, interfaces and types to work with multiple data types dynamically.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here:

- `T` is a generic type
- The function accepts a value of type `T`
- It also returns the same type `T`

This keeps the function reusable and type-safe.

## How Generics Maintain Type Safety

Generic preserve the type passed into the function. Generics helps to reuse the same types again if necessary.

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity("Hello");
```

TypeScript automatically understands:

```ts
result: string;
```

now it can works safely:

```ts
result.toUpperCase();
```

## Reusable Generic Functions

Generics help create reusable functions for different data types.

Example:

```ts
function getFirstElement<T>(array: T[]): T {
  return array[0];
}
```

Usage:

```ts
const numberResult = getFirstElement([1, 2, 3]);
const stringResult = getFirstElement(["a", "b", "c"]);
```

TypeScript automatically infer the types of the data passed when the function is invoked. No type needs to be called explicitly.
