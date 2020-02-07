/*
Import and configs
*/
    // Import Brain.js
    const Brain = require('brain.js');

    // Create neural network
    const NeuralNetwork = new Brain.NeuralNetwork({
        activation: 'sigmoid',
        hiddenLayers: [2],
        iterations: 2000,
        learningRate: 0.5
    });
//

/* 
Set Data
*/
    const trainData = require('./data/trainData.json');
    const testData = require('./data/testData.json');
//

/* 
Train NeeuralNetwork
*/
    NeuralNetwork.train( trainData, {
        log: true,
        logPeriod: 10,
        errorThresh: 0.003
    } )
//

/* 
Test NeuralNetwork
*/
    testData.forEach(flowerData => {
        const testedFlower = NeuralNetwork.run( flowerData.input );
        console.log(`Tested flower is: ${testedFlower}`)
    });
//