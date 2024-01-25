

window.addEventListener("load",checkinternetConnection);

function checkinternetConnection(){
    const statusText=document.getElementById("stausText")
    const ipAddressText=document.getElementById("ipAddressText")
    const networkstrengthText=document.getElementById("networkstrengthText")
    statusText.textContent ="checking....";

    if(navigator.onLine){
        fetch("https://api.ipify.org/?format=json"
        .then((Response)=> Response.json())
        .then((data)=>{
            ipAddressText.textContent =data.ip;
            statusText.textContent="connected"
            const connection =navigator.connection;
            const networkstrengthText =connection?connection.download +"mbps":"unknown";
        )
    }
        networkstrengthText.textContent =networkstrength
        .catch(()=>{
            statusText.textContent ="disconnected";
            ipAddressText.textContent ="-"
            networkstrengthText.textContent="-"
        })
        }
    

    else{
        statusText.textContent="Disconnected";
        ipAddressText.textContent="-"
        networkstrengthText.textContent="-"
    }

