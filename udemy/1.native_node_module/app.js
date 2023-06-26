const fs = require("fs")

// fs.writeFile("demo.txt", "Hey World Demo!", (err) => {
//     if (err) throw err;
//     console.log("Error");
// })

fs.readFile('./demo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})  