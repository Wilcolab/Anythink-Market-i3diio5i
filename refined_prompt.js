/**
 * Checks whether a character exists in a string (case-insensitive).
 * 
 * @param {string} character - A single character to search for
 * @param {string} string - The string to search in
 * 
 * @returns {boolean|string} - Returns true if character is found, false if not found.
 *                             Returns error message string if inputs are invalid:
 *                             - "blank input" if either parameter is undefined or empty
 *                             - "does not take numerical arguments" if inputs are not strings
 *                             - "non-single character input" if character length !== 1
 * 
 * @example
 * has_character("a", "nasa");           // true
 * has_character("b", "nana");           // false
 * has_character("A", "nasa");           // true (case-insensitive)
 * has_character();                      // "blank input"
 * has_character(1, "nana");             // "does not take numerical arguments"
 * has_character("ab", "nana");          // "non-single character input"
 */

/**
 * Converts a string to dot.case format.
 * 
 * Converts camelCase, kebab-case, snake_case, and space-separated strings
 * to dot.case notation. The conversion is case-insensitive in the output.
 * 
 * @param {string} string - The input string to convert to dot case
 * 
 * @returns {string} - The converted string in dot.case format, or an error message:
 *                     - "blank input" if string is empty
 *                     - "does not take numerical arguments" if input is not a string
 * 
 * @example
 * toDotCase("helloWorld");              // "hello.world"
 * toDotCase("hello-world");             // "hello.world"
 * toDotCase("hello_world");             // "hello.world"
 * toDotCase("HelloWorld");              // "hello.world"
 * toDotCase("");                        // "blank input"
 * toDotCase(123);                       // "does not take numerical arguments"
 */
function has_character(character, string) {
    // Error handling: blank input
    if (character === undefined || string === undefined) {
        return "blank input";
    }

    // Error handling: check if inputs are strings
    if (typeof character !== "string" || typeof string !== "string") {
        return "does not take numerical arguments";
    }

    // Error handling: check if character or string is empty
    if (character === "" || string === "") {
        return "blank input";
    }

    // Error handling: check if character is a single character
    if (character.length !== 1) {
        return "non-single character input";
    }

    // Case-insensitive search: normalize both to lowercase
    const lowerCharacter = character.toLowerCase();
    const lowerString = string.toLowerCase();

    // Check if character exists in string
    return lowerString.includes(lowerCharacter);
}

// Test cases
console.log(has_character("a", "nasa"));           // true
console.log(has_character("b", "nana"));           // false
console.log(has_character("A", "nasa"));           // true (case-insensitive)
console.log(has_character());                      // "blank input"
console.log(has_character(1, "nana"));             // "does not take numerical arguments"
console.log(has_character("ab", "nana"));          // "non-single character input"
console.log(has_character("", "nana"));            // "blank input"
function toDotCase(string) {
    if (typeof string !== "string") {
        return "does not take numerical arguments";
    }
    
    if (string === "") {
        return "blank input";
    }
    
    return string
        .replace(/([a-z])([A-Z])/g, "$1.$2")
        .replace(/[\s_-]+/g, ".")
        .toLowerCase();
}

// Test cases
console.log(toDotCase("helloWorld"));              // "hello.world"
console.log(toDotCase("hello-world"));             // "hello.world"
console.log(toDotCase("hello_world"));             // "hello.world"
console.log(toDotCase("HelloWorld"));              // "hello.world"
console.log(toDotCase(""));                        // "blank input"
console.log(toDotCase(123));                       // "does not take numerical arguments"
