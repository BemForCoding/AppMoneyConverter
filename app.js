let thb = prompt("ใส่จำนวนเงิน : ")
function display(elementID,value)
 {
    document.getElementById(elementID).innerHTML =value
}
function toUSD(thb) {
    let value = (thb/36)
    document.getElementById("pp").innerHTML = value.toFixed(2) + "usd"
}
toUSD(thb)