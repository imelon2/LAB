type FetchPreflightFunc = (req:string) => Promise<void>
let b = async () => {
    return 
}

let a : FetchPreflightFunc = async() => {
    return await b();
}