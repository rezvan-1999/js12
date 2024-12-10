//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

function firstFunc() {
  let word1 = "Action";

  function secondFunc() {
    let word2 = "Potential";

    function thirdFunc() {
      let word3 = "Signals";
      console.log(word1);
      console.log(word2);
      console.log(word3);
    }
    thirdFunc();
  }
  secondFunc();
}
firstFunc();
