// JSON = (JavaScript Object Notation) data-interchange format 
//               Used for exchanging data between a server and a web application
//               JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

// JSON.stringify()

    // ["value", ..., ...]
    const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

    // [{"name": "value"}, {...}, {...}]
    const people = [
        {
            "name": "Spongebob",
            "age": 30,
            "isEmployed": true
        },
        {
            "name": "Patric",
            "age": 34,
            "isEmployed": false
        },
        {
            "name": "Squidward",
            "age": 50,
            "isEmployed": true
        },
        {
            "name": "Sandy",
            "age": 27,
            "isEmployed": false
        }
    ];
    // {"name": "value", ..., ...}
    const person = {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true,
        "hobbies": ["Jellyfishing", "Karate", "Cooking"]
    }

    console.log(names);
    const jsonStringifyNames = JSON.stringify(names);
    console.log(jsonStringifyNames);

    console.log(person);
    const jsonStringifyPerson = JSON.stringify(person);
    console.log(jsonStringifyPerson);


    console.log(people);
    const jsonStringifyPeople = JSON.stringify(people);
    console.log(jsonStringifyPeople);

// JSON.parse()

    // ["value", ..., ...]
    const namesParse = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

    // [{"name": "value"}, {...}, {...}]
    const peopleParse = `[ { "name": "Spongebob", "age": 30, "isEmployed": true }, { "name": "Patric", "age": 34, "isEmployed": false }, { "name": "Squidward", "age": 50, "isEmployed": true }, { "name": "Sandy", "age": 27, "isEmployed": false } ]`;
    // {"name": "value", ..., ...}
    const personParse = `{ "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"] }`;

    console.log(namesParse);
    const parsedNames = JSON.parse(namesParse);
    console.log(parsedNames);
    
    console.log(peopleParse);
    const parsedPeople = JSON.parse(peopleParse);
    console.log(parsedPeople);

    console.log(personParse);
    const parsedPerson = JSON.parse(personParse);
    console.log(parsedPerson);

// EXAMPLES

    fetch("person.json")
    .then(response => response.json())
    .then(values => console.log(values))
    .catch(error => console.error(error));

    fetch("people.json")
        .then(response => response.json())
        .then(values => values.forEach(value => console.log(value)))
        .catch(error => console.error(error));

    fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));