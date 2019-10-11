module.exports = function parseIni (content){

    const lines = content.split('\n');
    const regEx_cat = /^\[.+\]/g
    const  regEx_key = /^(\w+.*\s*)/g
    let newObj ={}
    let category = ''
    let new_lines = []
    let  new_line = ''
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
            new_line= line.match(regEx_key)[0].split("=")
            new_lines.push(new_line)
        }
   
    }
    console.log(newObj)

}