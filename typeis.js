
 function typeis(parameter){
    let type=typeof(parameter)
    if(type==="object") return objectType(parameter)
    else return type
}

function objectType(parameter){
    if(parameter===null) return 'null'
    if(Array.isArray(parameter)==true) return "array"
    if(parameter instanceof RegExp) return "RegExp"
    if(parameter instanceof Date)return "Date"
    return "object"
}
export {typeis}