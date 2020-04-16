const marked = require('marked');
const fs = require('fs');

const readMe = fs.readFileSync('README.md', 'utf-8');
const markdownReadMe = marked(readMe);

fs.writeFileSync('./README.html', markdownReadMe);