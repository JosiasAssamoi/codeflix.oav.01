module.exports = function parseYml(content){

    lines = content.split('\n')
    const regEx_cat = /(^[^{#]+:\s*)$/g
    const regEx_subCat = /(.+):\s*({.*})/g
    const regEx_key = /{?(.+):(.+)/g
    let newObj ={}
    let category = ''
    let subCat= ''
    let newLines = []
    for(line of lines){

        if(line.match(regEx_cat)){
            let old = category 
            category = line
            newObj[category] =''
            console.log('cat =',category,' old = ',old,' lines =',newLines)
            if(newLines.length > 0 ){
                newObj[old]=newLines
                newLines =[]
            } 
        }

        if(line.match(regEx_subCat)){
            newLines.push(line)
        }
        if (line.match(regEx_key)){
            newLines.push(line)
        }

    }
   // console.log(newObj)

}