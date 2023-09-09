const desconto = 0;
const descontoBlackFriday = 50;
console.log(Boolean(desconto));
console.log(typeof Boolean(descontoBlackFriday), Boolean(descontoBlackFriday));

const a = Boolean("");
const b = Boolean(null);
const c = Boolean(undefined);
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
