// specify folder path to remove files from
const folderPath = './';
// specify file format to remove here 'vtt' 
const fileFormat = 'vtt';

const fs = require('fs');
const path = require('path');
let count = 0;

const listOfFiles = fs.readdirSync(folderPath).filter(file => {
  return path.extname(file) === `.${fileFormat}`;
});

console.log(`
----------------------------
`);

if(listOfFiles.length > 0) {
  listOfFiles.forEach(file => {
    fs.unlinkSync(file);
    count += 1;
    console.log(`${file} has deleted`);
  });
} else {
  console.log(`There is no "${fileFormat}" file in "${folderPath}" folder.`);
}

// showing total deleted files number
console.log(`
----------------------------
Total file deleted: ${count}

`);

