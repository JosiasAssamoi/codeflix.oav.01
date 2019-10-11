const path = require('path')
const fs  = require('fs')
const parseEnv = require('./parseEnv')
const parseIni = require('./parseIni')
const args = process.argv.slice(2)
const filename = args[0]

console.log(args)

// STEP 1 check extension of args
// path.extName()

//step 2 lire contenu
// var contents = fs.readFileSync('DATA', 'utf8');

//const content = fs.readFileSync(filename, 'utf8');
