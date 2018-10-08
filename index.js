
const URLethertotal = "https://api.etherscan.io/api?module=stats&action=ethsupply&apikey="
const TOKEN = "VWQC4XV7891N5JZBETE9JSV5HF9DSNSSY2"

const FULL_URL = URLethertotal + TOKEN

var ethertotal = document.querySelector("#ethertotal");
console.log(ethertotal)

window.addEventListener("load", () => {
    fetch(FULL_URL)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#ethertotal");
            ethertotal.innerHTML += " " + val.result 
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 

const URLetherprice = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey="

const FULL_URL1 = URLetherprice + TOKEN

window.addEventListener("load", () => {
    fetch(FULL_URL1)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#etherprice");
            ethertotal.innerHTML += " " + val.result.ethbtc
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 

const URLrecentblock = "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey="


const FULL_URL2 = URLrecentblock + TOKEN

window.addEventListener("load", () => {
    fetch(FULL_URL2)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#recentblock");
            ethertotal.innerHTML += " " + parseInt(val.result, 16) // convert hex value to decimal
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 

const URLgasprice = "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey="

const FULL_URL3 = URLgasprice + TOKEN

window.addEventListener("load", () => {
    fetch(FULL_URL3)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#gasprice");
            ethertotal.innerHTML += " " + parseInt(val.result, 16)
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 

const URLtransaction = "https://api.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=0x2910543af39aba0cd09dbb2d50200b3e800a63d2&tag=latest&apikey="

const FULL_URL4 = URLtransaction + TOKEN

window.addEventListener("load", () => {
    fetch(FULL_URL4)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#transaction");
            ethertotal.innerHTML += " " + parseInt(val.result, 16)
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 


const URLblocks = "https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x10d4f&boolean=true&apikey="

const FULL_URL5 = URLblocks + TOKEN

window.addEventListener("load", () => {
    fetch(FULL_URL5)
    .then(function(result){
        var value = result.json()
        value.then(function(val){
            var ethertotal = document.querySelector("#blocks");
            ethertotal.innerHTML += " " + parseInt(val.result.gasLimit, 16)
            console.log(val.result)
        }) 
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(error) {
        console.log.apply(error)
    })
}) 