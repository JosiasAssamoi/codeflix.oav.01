const fs =require('fs')
const Utils= require('./utils')
module.exports = function parseEnv (content){

    content = content.split('\n')
    let regex = /^([^#]+)=([^#]*)[\r|\n]$/g
    newObj = {}

    for(line of content){
        if(line.match(regex)){
            let new_line=regex.exec(line)
            newObj[new_line[1]]=new_line[2]
        }
    }

    let fullDate= Utils.getFullDateString()
    let filename = `env.${fullDate}`
    const data = JSON.stringify(newObj,null,' ')
    fs.writeFile(filename, data, (err) => {
        if (err) throw err
        console.log('The file : '+filename+ ' has been saved!');
      })


}