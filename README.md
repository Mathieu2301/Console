# Console
  Better console :
  - Easy colors
  - Auto timestamp

![Alt text](/img/test.jpg "Test 1")

## Installation
  ```
  npm i @mathieuc/console
  ```

  Then:

  ```javascript
  require('@mathieuc/console')( // Just import the lib
    '§',  // Character you want to use (defaut: '§')
    true, // Active timestamp (defaut: false)
    CORR, // Custom timestamp correction in milliseconds (defaut: 0)
    '94', // Custom timestamp color (defaut: '94' => Light blue)
  );

  // Then you can use

  console.log(...);
  console.info(...);
  console.warn(...);
  console.error(...);

  // Bonus: To calculate the necessary CORR, you can use 'Date().getTimezoneOffset()'
  // CORR = parseInt(new Date().getTimezoneOffset() * 60 + 7200, 10) * 1000
  ```

## Console colors
  This lib allows you to use any character as an alias to `\x1b[Xm`.

### Example
  If you use '§' as alias,
  ```javascript
  console.log('\x1b[31mRed \x1b[32mGreen \x1b[33mYellow');
  ```
  becomes
  ```javascript
  console.log('§31Red $32Green §33Yellow');
  ```

There are two parameters (digits) :
  - First is type: it can be 3, 4, 9, 10 or nothing
  - Second is color, between 0 and 7

### Types :
- **`X`**: Formatting
    - **`0`**: Reset
    - **`1`**: **Bold**
    - **`3`**: *Italic*
    - **`7`**: Reverse
    - **`8`**: Hidden
- **`3X`**: Colors
- **`4X`**: Background
- **`9X`** : Colors (light)
- **`10X`**: Background (light)

### Colors : (*3X, 4X, 9X, 10X*)
- **`0`**: ![Black](https://via.placeholder.com/10/000/?text=+) Black
- **`1`**: ![color](https://via.placeholder.com/10/f00/?text=+) Red
- **`2`**: ![color](https://via.placeholder.com/10/0f0/?text=+) Green
- **`3`**: ![color](https://via.placeholder.com/10/ff0/?text=+) Yellow
- **`4`**: ![color](https://via.placeholder.com/10/00f/?text=+) Blue
- **`5`**: ![color](https://via.placeholder.com/10/f0f/?text=+) Magenta
- **`6`**: ![color](https://via.placeholder.com/10/0ff/?text=+) Cyan
- **`7`**: ![color](https://via.placeholder.com/10/fff/?text=+) White

### Combinations
  If you use `§` as alias, you can combine formatting with font color and background color.
  - `§3§44§30` => Italic (`§3`) + Black font (`§30`) + Blue background (`§44`)
  - `§3§104§30` => Italic (`§3`) + Black font (`§30`) + Light blue background (`§104`)

  ![Alt text](/img/test2.jpg "Test 1")

## Problems
 If you have errors in console or unwanted behavior, just reload the page.
 If the problem persists, please create an issue [here](https://github.com/Mathieu2301/Console/issues).
