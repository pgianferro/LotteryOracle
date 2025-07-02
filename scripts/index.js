const {ethers} = require("ethers");

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

const contractAddress = "0x71C95911E9a5D330f4D621842EC243EE1343292e" ;

const abi = ["event VRF()"];

async function main() {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    contract.on("VRF",() => {
        console.log("Recibí un evento")
    });
    console.log("estoy escuchando un evento");
    
}

main();