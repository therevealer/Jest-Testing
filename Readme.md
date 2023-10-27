 # Testing Project Readme

This is a simple testing project for two functions: `add` and `findNo`. The project contains test cases to ensure that these functions work correctly.

## Project Structure

The project is organized as follows:

- `math.js`: Contains the `add` function.
- `array.js`: Contains the `findNo` function.
- `test.js`: Contains test cases for the `add` and `findNo` functions.

## Functions

### `add(a, b)`

This function takes two numbers, `a` and `b`, and returns their sum.

```javascript
function add(a, b){
    return a + b;
}
```

### `findNo(arr)`

This function finds the largest number in an array. It takes an array `arr` as input and returns the largest number in the array.

```javascript
function findNo(arr){
    if(!arr || arr.length === 0 ){
        throw new Error("Array is Empty or undefined");
    }

    let largest = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}
```

## Running Tests

To test these functions, you can run the test cases defined in `test.js`. These test cases use the Jest testing framework.

To run the tests, follow these steps:

1. Install Jest globally (if not already installed):
   ```
   npm install -g jest
   ```

2. Run the tests:
   ```
   jest test.js
   ```

## Test Cases

### `add` Function Tests

The `add` function is tested with the following cases:

- `add` should correctly add two positive numbers.
- `add` should correctly add a positive and a negative number.
- `add` should correctly add two negative numbers.
- `add` should correctly add zero and a number.

### `findNo` Function Tests

The `findNo` function is tested with the following cases:

- Finding the largest number in an array of positive numbers.
- Finding the largest number in an array of negative numbers.
- Finding the largest number in an array with a single number.

## Running the Tests

You can run the tests to ensure that the functions are working as expected. Simply follow the steps mentioned above in the "Running Tests" section.

Feel free to add more test cases or modify the functions as needed for your specific use case.