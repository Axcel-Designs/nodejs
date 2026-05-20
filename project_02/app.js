// 1. Array Flattening
// To flatten a two-dimensional array without using `.flat()`, we can loop through the main array and combine its inner subarrays. This implementation uses a simple `for...of` loop combined with `Array.prototype.push()` and the spread operator (`...`).
function flattenArray(arr) {
  const result = [];

  for (const subArr of arr) {
    result.push(...subArr);
  }
  return result;
}
console.log(
  flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9],]),
);

// ### 2. Triple Array Intersection
// To find the common elements across three arrays efficiently, we can convert the second and third arrays into `Set` structures for $O(1)$ lookup times, and then iterate through the first array to find matches.
function tripleIntersection(arr1, arr2, arr3) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const currentItem = arr1[i];
    
    const inArr2 = arr2.includes(currentItem);
    const inArr3 = arr3.includes(currentItem);

    const isNotDuplicate = !result.includes(currentItem);

    if (inArr2 && inArr3 && isNotDuplicate) {
      result.push(currentItem);
    }
  }

  return result;
}console.log(tripleIntersection([1, 2, 3, 4], [3, 4, 5], [3, 4, 5, 6])); 

//3. Unique Element Extraction
// Because `Set` and `.filter()` are restricted, we can use an empty object/map tracking pattern, or a result array lookup pattern. Using `result.includes()` inside a standard `forEach` loop gives a clean, readable constraint-compliant solution.
function extractUnique(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}
console.log(extractUnique([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]));

// ### 4. Case Conversion (kebab-case to camelCase)
// This solution splits the string by hyphens (`-`), leaves the first word lowercase, and capitalizes the first letter of all subsequent words before joining them back together.
function kebabToCamel(str) {
  const words = str.split("-");

  if (words.length === 0) return "";

  let camelCaseStr = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  return camelCaseStr;
}
console.log(kebabToCamel("hello-there"));
