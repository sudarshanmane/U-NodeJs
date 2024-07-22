// How to read and write the data into files
const fs = require("fs");

// readFileSync() -> reads entire data from files asynchronously.

const setReadData = (textOfFile) => {
  fs.writeFile(
    "./Files/fileOutput.txt",
    `This the the content read from the ./Files/file.text file: ${textOfFile}`
  );
};

fs.readFile("./Files/file.txt", "utf-8", (err, data) => {
  setReadData(data);
});
