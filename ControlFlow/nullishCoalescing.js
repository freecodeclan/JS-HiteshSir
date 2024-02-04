let val1;
val1 = null ?? 10;
console.log(val1);

const nullValue = null;
const emptText = "";
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA);
console.log(valB);
console.log(valC);

const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
