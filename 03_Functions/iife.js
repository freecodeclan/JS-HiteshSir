//-- Immediately Invoked Function Expression IIFE

//-- Named IIFE

(function greetingMsg() {
  console.log("Jai Shree Ram");
})();

//-- We can use IIFE in arrow functions too

//-- Un-named IIFE wth Arrow Function
((temple) => {
  console.log(`OM Namash Shivaiyae @ ${temple}`);
})("Varanasi");
