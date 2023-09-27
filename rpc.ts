import axios from "axios";

type res = {
    jsonrpc:string;
    id:number
    result: {
        baseFeePerGas:string
    }
}

let url = 'https://polygon-testnet-rpc.allthatnode.com:8545/uuPryfzIVwN7gRDw9v5Zzw6jdDHPw11p'

const rpcCall = async ({ method, params }: { method: any, params: any }) => {
    const body = {
        method,
        id: 1337,
        jsonrpc: '2.0',
        params: params,
    }

    return await axios.post(url, body)
}

const getBlockNumber = async () => {
    const { data: latestBlock } = await rpcCall({
        method: "eth_getBlockByNumber",
        params: ['latest', false]
    })
    return latestBlock;
}

(async() => {
    try {
        const promise =() => {
            return new Promise((resolve,reject) => {
            getBlockNumber().then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })} 
        let a = await promise()
        console.log(a);
        
    } catch (error) {
        console.log(error);
        
    }
})()