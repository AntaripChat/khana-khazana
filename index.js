const data = require('./data.json');

exports.All = () =>{
    return data;
}

exports.khana = () =>{
    const random = data[Math.floor(Math.random() * data.length)];
    return random
}