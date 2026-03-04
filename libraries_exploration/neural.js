const Dannjs = require('dannjs');
const Dann = Dannjs.dann;
const { dataset } = require('./binaryCountData');


const countingNN = new Dann(4,4);
countingNN.addHiddenLayer(16,'leakyReLU');

countingNN.lr = 0.01;

countingNN.feedForward([1,0,1,1],{log:true});
const epoch = 100000;
for (let e=0; e < epoch;e++) {
    for (data of dataset) {
        countingNN.backpropagate(data.input,data.target);
    }
}
countingNN.feedForward([1,0,1,1],{log:true});