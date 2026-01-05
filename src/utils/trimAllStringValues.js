/**
 * trim all string values in an object
 * 
 * @param {Object} object 
 * @returns {Object}
 */
export const trimAllStringValues = (object) => {
    if(!object || typeof object !== "object"){
        throw new Error("Please provide a valid object");
    };
    for (const key in object) {
        if(typeof object[key] === "string"){
            object[key] = object[key].trim();
        }
    }
    return object;
};