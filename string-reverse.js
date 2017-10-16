module.exports = (str) => {
    if(typeof str !== 'string'){
        throw TypeError(`expects a string got ` + (typeof str));
    }
    return [...str].reverse().join('');
}