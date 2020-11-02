type JusticeLeague = {
  superman: string;
  batman: string;
  flash: string;
  wonderWoman?: string;
};

let justiceLeague: JusticeLeague = {
  superman: "Clark Kent",
  batman: "Bruce Wayne",
  flash: "Barry Allen",
};

let {
  superman,
  batman: murcielago,
  flash,
  wonderWoman = "Diana de Temiscira",
} = justiceLeague;

console.log(superman);
console.log(murcielago);
console.log(flash);
console.log(wonderWoman);
