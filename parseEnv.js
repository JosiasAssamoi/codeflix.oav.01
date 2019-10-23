const fs =require('fs')
const Utils= require('./utils')
module.exports = function parseEnv (content){

    content = content.split('\n')
    const regex = /^([^#]+)=([^#]*)[\r|\n]$/g
    newObj = {}

    for(line of content){
        if(line.match(regex)){
            let newLine=regex.exec(line)
            newObj[newLine[1]]=newLine[2]
        }
    }

    let fullDate= Utils.getFullDateString()
    let fileName = `env.${fullDate}`
    const data = JSON.stringify(newObj,null,' ')
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('The file : '+fileName+ ' has been saved!');
      })


}