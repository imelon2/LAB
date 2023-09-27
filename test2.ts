// import { ethers } from "ethers"

// const main = async() => {
//     let url = 'https://lodis-dev-polygon.dknote.net/'
//     let provier = new ethers.providers.JsonRpcProvider({url,timeout:18})
//     let id = (await provier.getNetwork()).chainId
//     console.log(id);
    
//     console.log('timeout',provier.connection.timeout);

//     let block = await provier.getBlockNumber();
//     console.log('Block Number',block);
//     let balance = await provier.getBalance('0x43375b06Ea2ED0dF0069dfF7b787575cFBEd6cFb');
//     console.log('Balance',balance);
//     provier.sendTransaction()
// }

// (async() => {
//     await main();
// })() 