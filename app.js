var fs = require("fs");

//make a directory
if(!fs.existsSync("./docs")){
    fs.mkdir("./docs", (err) => {
        if(err) console.log(err);
        console.log("Added the direktry docs")
    });
}

//write to files
fs.writeFile("./docs/myBlog1.txt", "Hello! \nThis is my first blog. ", (err) => {
    if(err) console.log(err)
    console.log("Writed to myBlog1.txt")
});

//read from files
fs.readFile("./docs/myBlog1.txt", (err, data) => {
    if(err) console.log(err)
    console.log(data.toString());
});