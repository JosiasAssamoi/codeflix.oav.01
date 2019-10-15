const fs =require('fs')
module.exports = function parseIni (content){

    const lines = content.split('\n');
    const regEx_cat = /^\[.+\]/g
    const  regEx_key = /^(?!;)([\w|\.|\s]+)=(.*)/g
    let newObj ={}
    let category = ''
    let new_lines = []
    for(line of lines){

        if(line.match(regEx_cat)){
            //line = JSON.stringify(line)
            let old = category 
            category = line
            newObj[category] =''
            if(new_lines.length > 0 ){
               // new_lines = JSON.stringify(new_lines,null,' ')
                newObj[old]=new_lines
                new_lines =[]
            } 
        }
        else if(line.match(regEx_key)){
            new_line= line.match(regEx_key)[0].split("=")
            new_line = toObject(new_line)
            new_lines.push(new_line)
        }
   
    }
    const data = JSON.stringify(newObj,null,' ')
    fs.writeFile('message.txt', data, (err) => {
        if (err) throw err
        console.log('The file has been saved!');
      })

}

function toObject(item){
    let [key,value] = item
    let newObjet = {}
    newObjet[key]=value
    return newObjet
}
