const path = require('path')
const fs  = require('fs')
const parseEnv = require('./parseEnv')
const parseIni = require('./parseIni')
const args = process.argv.slice(2)
const filename = args[0]


// si on n'envoie pas exactement 1 param on envoie le "man de lapp"
// __filename renvoie path du fichier courant
if(args.length !== 1){
    console.log(`usage : node js ${__filename.split("/").pop()} <CONFIG_FILENAME> `)
    process.exit(0)
}
//Si le parametre passé a main n'existe pas 
if (!fs.existsSync(filename)) {
    console.log(`The file ${filename} does not exist.`);
    process.exit(-1)
}

// STEP 1 recuperation extension of arg
 const extension =filename.split('.').pop()

//STEP 2 lire contenu
var contents = fs.readFileSync(filename, 'utf8');


//STEP 3 parser le fichier 
const result = (extension === 'ini') ? parseIni(contents) : 
(extension === '.env') ? parseEnv(contents) : exit("Erreur au niveau de l'extension")

// STEP 4 si tout c'est bien passé on affiche result

function exit(msg){
    console.log(msg)
    process.exit(0)
}
