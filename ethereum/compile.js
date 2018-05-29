const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campainPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campainPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// check exist and create if not exist
fs.ensureDirSync(buildPath);
// console.log(1111, output);

for(let contract in output) {
    
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(/:/g, '') + '.json'),
        output[contract]
    );
    
}

