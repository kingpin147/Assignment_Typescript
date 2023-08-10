//Name	Muhammad Nouman Attique
//Roll No	PIAIC206489
//Batch	Batch 47

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Original guest list
const guestList: string[] = ["Akram", "Aslam", "Akbar", "Azhar", "Bilal", "Zafar", "Sana"];

// Print the guest who can't make it
const guestWhoCantMakeIt: string = guestList[1]; // Assuming the second person can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newGuest: string = "John";
guestList[1] = newGuest;

// Print a second set of invitation messages for the updated guest list
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add new guests using push() and splice()
guestList.push("Emma"); // Add at the end using push()
guestList.splice(guestList.length / 2, 0, "William"); // Add in the middle using splice()
guestList.push("Sophia"); // Add at the end using push()

// Print new invitation messages for the updated guest list
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}