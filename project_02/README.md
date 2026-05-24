# Project 02: Array and String Manipulation Challenges

This project contains a series of JavaScript logic challenges focused on data transformation, filtering, and string formatting.

---

## 1. Array Flattening

Write a function that accepts a two-dimensional array and returns a single flattened array.

**Requirements:**

- Do not use the built-in `Array.prototype.flat()` method.

**Example:**

- **Input:** `[[1, 2, 3], [4, 5], [6, 7, 8, 9]]`
- **Output:** `[1, 2, 3, 4, 5, 6, 7, 8, 9]`

---

## 2. Triple Array Intersection

Write a function that accepts three separate arrays and returns a new array containing only the elements shared across all three inputs.

**Example:**

- **Input:** `[1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6]`
- **Output:** `[3, 4]`

---

## 3. Unique Element Extraction

Write a function that accepts an array and returns a list of unique elements, effectively removing all duplicates.

**Requirements:**

- Do not use the `Set` object.
- Do not use the `Array.prototype.filter()` method.

**Example:**

- **Input:** `[1, 3, 2, 3, 4, 5, 4, 2, 5, 6]`
- **Output:** `[1, 2, 3, 4, 5, 6]`

---

## 4. Case Conversion (kebab-case to camelCase)

Write a JavaScript function that accepts a string in `kebab-case` and converts it to `camelCase`.

**Example:**

- **Input:** `hello-there`
- **Output:** `helloThere`
