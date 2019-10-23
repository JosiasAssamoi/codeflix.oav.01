const path = require('path')
const fs  = require('fs')
const parseEnv = require('./parseEnv')
const parseIni = require('./parseIni')
const parseYml = require('./parseYml')
const args = process.argv.slice(2)
const fileName = args[0]


// si on n'envoie pas exactement 1 param on envoie le "man de lapp"
// __fileName renvoie path du fichier courant
if(args.length !== 1){
    console.log(`usage : node js ${__fileName.split("/").pop()} <CONFIG_fileName> `)
    process.exit(0)
}
//Si le parametre passé a main n'existe pas 
if (!fs.existsSync(fileName)) {
    console.log(`The file ${fileName} does not exist.`);
    process.exit(-1)
}

// STEP 1 recuperation extension of arg
 const extension =fileName.split('.').pop()

//STEP 2 lire contenu
var contents = fs.readFileSync(fileName, 'utf8');


//STEP 3 parser le fichier 
const result = (extension === 'ini') ? parseIni(contents) : 
(extension === 'env') ? parseEnv(contents) : (extension === 'yml') ? parseYml(contents): exit("Erreur au niveau de l'extension")

// STEP 4 si tout c'est bien passé on affiche result

function exit(msg){
    console.log(msg)
    process.exit(0)
}
