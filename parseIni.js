const fs =require('fs')
const Utils= require('./utils')
module.exports = function parseIni (content){

    const lines = content.split('\n');
    const regEx_cat = /^\[.+\]/g
    const regEx_key = /^([^;]+)=([^;]*)/g
    let newObj ={}
    let category = ''
    let new_lines = []
    for(line of lines){
        if(line.match(regEx_cat)){
            let old = category 
            category = line
            newObj[category] =''
            if(new_lines.length > 0 ){
                newObj[old]=new_lines
                new_lines =[]
            } 
        }
        else if(line.match(regEx_key)){
            new_line= regEx_key.exec(line)
            new_line = Utils.toObject(new_line)
            new_lines.push(new_line)
        }
    }

    let fullDate= Utils.getFullDateString()
    let filename = `php.${fullDate}`

    const data = JSON.stringify(newObj,null,' ')
    fs.writeFile(filename, data, (err) => {
        if (err) throw err
        console.log('The file : '+filename+ ' has been saved!');
      })

}

