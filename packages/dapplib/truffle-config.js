require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar proud hockey knife flush taxi'; 
let testAccounts = [
"0xec66e3f7ddee601cd36ef0021e71db46a997eaaf055d00c8db6bbd1208e80e2b",
"0x360f68bf992353d56b516c05878d82aa2c93f473059c8ad50ab2afb1e62bd5e1",
"0x4939b7af0d269614b3e9d5ae1716a71d3c1c2330f333e9be6bb12f3d9b9bca10",
"0x856135a98684061b76fb9e13714a01b6b9803b1967256daec6e8a697657e4686",
"0xb2a78088b25432ed5f153d1679b7da468abd1e23c3a6b394d304b813f8f7bf51",
"0xc587c6d15f3119aad3e968dec0025d684f16632e7022cb3dc60cf214aca5b9f5",
"0xb2fd4f2224575fa05f2ca9e75f3dfdb05979b42f52452a15bb63a0ce875c4eea",
"0xfc4aed2b47acbfb880c206e559458081a78669438972f36276dccd9ab1c197cc",
"0x4e21a628eee7c3257d9c455934ca08d59a6f622c9c1cb3a9bbdce48d0e3ae0c7",
"0xf909b938d720ca73e658265cb91ce7d9076905881e6d4bea53c56d5850e6b25f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

