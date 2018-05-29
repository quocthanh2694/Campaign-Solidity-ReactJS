const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'dune dinner stool aspect spin family please approve lemon swap quantum bid',
    'https://rinkeby.infura.io/sjPW9jCRhQxSehjAx9WP'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to  deploy from account: ', accounts[0]);

    // let gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

     
    console.log('contract deploy to', result.options.address);
};
deploy();
