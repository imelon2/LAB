import { ethers , makeError} from "ethers"
const runningTimeout = (function(timeout,method) {
    let timer: NodeJS.Timer | null = null;
    const promise: Promise<never> = new Promise(function(resolve, reject) {
        if (timeout) {
            timer = setTimeout(() => {
                if (timer == null) { return; }
                timer = null;

                reject(makeError("timeout","TIMEOUT", { operation: method  }));
                    // reject("TIMEOUT");
            }, timeout);
        }
    });
    const cancel = function() {
        if (timer == null) { return; }
        clearTimeout(timer);
        timer = null;
    }

    return { promise, cancel };
})();

function main() {
    ethers
}