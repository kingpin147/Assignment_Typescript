"use strict";
//Name	Muhammad Nouman Attique
//Roll No	PIAIC206489
//Batch	Batch 47
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
let nameWithWhitespace = "\tNouman Attique\n";
// Print the name with whitespace
console.log("Name with whitespace: ");
console.log(nameWithWhitespace);
// Strip the whitespace from the name
let strippedName = nameWithWhitespace.trim();
// Print the name after stripping whitespace
console.log("\nStripped Name: ");
console.log(strippedName);
