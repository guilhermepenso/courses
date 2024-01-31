// .toLocaleString() = returns a string with a language, sensitive representation of a number

//intl.NumberFormat()

//number.toLotaleString("locale", {options});

//'locale' = specify the language (undefined = default set in browser)

let number = 123456.789;

numberDF = number.toLocaleString(undefined); // default locale from browser
console.log(numberDF);

numberIN = number.toLocaleString("hi-IN"); // the locale consist in ("language-country")
console.log(numberIN);

numberDE = number.toLocaleString("de-DE");
console.log(numberDE);

// 'options' = object with formatting options

numberUS = number.toLocaleString("en-US", {style: "currency", currency: "USD"});  
console.log(numberUS);

numberBR = number.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
console.log(numberBR);

numberIT = number.toLocaleString("it-IT", {style: "currency", currency: "EUR"});
console.log(numberIT);