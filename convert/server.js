/*
Import
*/
    const d3 = require('d3');
    //const fetch = require('node-fetch');
    
//


/* 
Convert
*/
    d3.csv('/data/iris.csv', ( jsonData ) => {
        console.log(jsonData)
    })
//