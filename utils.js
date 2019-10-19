module.exports ={
    getFullDateString: function getFullDateString(){
        const currentdate = new Date()
        return `${currentdate.getFullYear()}${(currentdate.getMonth()+1)}${currentdate.getDay()}${currentdate.getHours()}${currentdate.getMinutes()}${currentdate.getSeconds()}`
    },
    toObject: function toObject(item){
        let [,key,value] = item
        let newObjet = {}
        newObjet[key]=value.trim()
        return newObjet
    }

} 