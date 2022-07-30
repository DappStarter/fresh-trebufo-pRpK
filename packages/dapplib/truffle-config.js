require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space struggle decrease night exchange grid kangaroo army gas'; 
let testAccounts = [
"0x32f96286e96bd6e111a9f5027416c8f62da62f64f6bfb49aa64015e78b35f42a",
"0x375039b67cbfed52a535ba72b402ad3e6adc7e5a73ea6c9390b666bc716b4845",
"0xac76521af5a98dbaecd1ff2dc67f9cffcb63b019012240f8fe0e68a89b398a77",
"0x828fc45b9544beeddfde2278b5f0ac6eff91c59a48c922abf956631f67657f39",
"0xf8c26ec6ce699216e3c8d66d264c6c62f91c23b3a44b73aded0d1113e0b60c3a",
"0xc49514a2b1240b450a15271f30ad2c0558c0030f35a4d921e68209e4f393d5ed",
"0x89d801b0158837dddc3b99c8a19fcbf05daa258a201eb3e60344c615f8db7e36",
"0x09ffc7566cb078d075971175990ddc2f242f86c8b57e8a3493271ad2c4d64ccf",
"0xd15cc584fa85f811776fe99d67af053c1885d5535eefe19f30d563ec3e170b49",
"0xee4038c28d80e659c13fd72a9d07dd0f2b6ba2924804907ef8e2cbf3ccd4eb9c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


