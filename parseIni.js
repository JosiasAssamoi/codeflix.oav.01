const fs =require('fs')
const Utils= require('./utils')
module.exports = function parseIni (content){

    const lines = content.split('\n');
    const regexCat = /^\[.+\]/g
    const regexKey = /^([^;]+)=([^;]*)/g
    let newObj ={}
    let category = ''
    let newLines = []
    for(let line of lines){
        if(line.match(regexCat)){
            let old = category 
            category = line
            newObj[category] =''
            if(newLines.length > 0 ){
                newObj[old]=newLines
                newLines =[]
            } 
        }
        else if(line.match(regexKey)){
            newLine= regexKey.exec(line)
            newLine[2]=newLine[2].replace(/"/g,"")
            newLine = Utils.toObject(newLine)
            newLines.push(newLine)
        }
    }

    const fullDate= Utils.getFullDateString()
    const fileName = `php.${fullDate}`

    const data = JSON.stringify(newObj,null,' ')
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('The file : '+fileName+ ' has been saved!');
      })

}

