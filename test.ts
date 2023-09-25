// import { FetchPreflightFunc, FetchRequest, JsonRpcApiProviderOptions, ethers } from "ethers"


// const main = async() => {
//     try {
//         let url = 'https://polygon-testnet-rpc.allthatnode.com:8545/uuPryfzIVwN7gRDw9v5Zzw6jdDHPw11p'
//         let fetch = new FetchRequest(url).redirect(url)
//         fetch.timeout = 1000
//         let options:JsonRpcApiProviderOptions = {
//             batchMaxCount:0,
//             batchMaxSize:0,
//             batchStallTime:1,
//             cacheTimeout:0
//         }
//         let provier = new ethers.JsonRpcProvider(fetch,undefined,options);
        
//         console.log('batchStallTime',provier._getOption('batchStallTime'));
//         console.log('timeout',provier._getConnection().timeout);
//         // console.log('after',a.);
        
        
//         let block = await provier.getBlockNumber();
//         console.log('Block Number',block);
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// (async() => {
//  await main()
// })()