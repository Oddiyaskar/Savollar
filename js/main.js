var Name = String(prompt("Ismingiz:"));
console.log(Name);

var Surname = String(prompt("Familiyangiz:"));
console.log(Surname);

var Age = Number(prompt("Yoshingiz:"));
console.log(Age);

var Phone = Number(prompt("Telefon raqamingiz:"));
console.log(Phone);

var Animal = String(prompt("Yoqtirgan hayvoningiz:"));
console.log(Animal);

var Seasons = String(prompt("Yoqtirgan faslingiz:"));
console.log(Seasons);

var Music = String(prompt("Sevimli musiqangiz:"));
console.log(Music);

var Film = String(prompt("Sevimli filmingiz:"));
console.log(Film);

var Books = String(prompt("Yoqtirgan asarlaringiz"));
console.log(Books);

var State = String(prompt("Borishni hohlaydigan davlatingiz:"));
console.log(State);

var Answers = [
    "Name:"+""+Name+"\n"+
    "Surname:"+""+Surname+"\n"+
    "Age:"+""+Age+"\n"+
    "Phone:"+""+Phone+"\n"+
    "Animal:"+""+Animal+"\n"+
    "Seasons:"+""+Seasons+"\n"+
    "Music:"+""+Music+"\n"+
    "Film:"+""+Film+"\n"+
    "Books:"+""+Books+"\n"+
    "State:"+""+State+"\n"
];

alert(Answers);