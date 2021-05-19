# Left Join

Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge

### Features

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

### Structure and Testing

run `npm test left-join` to check that the function is working correctly

## Approach & Efficiency

1. create a function that takes two trees as an argument.
2. create a new hashtable.
3. convert the input trees to arrays using preOrder traverse tree method.
4. add the first tree values to the hashtable
5. iterate over the second tree, check each value, if it is already in the hashtable, push it to the result array
6. return the array or an exception

- **time:** O(n) // with a possibility to increase in case of collision
- **space:** O(n)

## Solution

![image](../assets/CC33.jpg)

<!-- ## Resources and Collaborators -->

