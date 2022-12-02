export const changetwoCondition = (defaultValue:object, handler:any) => {
    
    const arr = Object.values(defaultValue)
    const prav = arr.map((item) => ({...item, ...arr}))
    for (const iterator of prav) {
        for (const key in iterator) {
            if(iterator[key]==true){
                console.log(key)
                return key
            }   
        }
    }
    handler(prav)
}