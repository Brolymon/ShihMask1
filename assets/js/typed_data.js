let wallet;
function initWallet(_key){
    wallet = new ethers.Wallet(_key);
}
function signMessage(_msg){
    _signed = "wallet not initialized"
    if(typeof wallet == Object){
        _signed = wallet.SignMsg(_msg)
    }
    window.flutter_inappwebview.callHandler('ShihSendSigned', _signed);
}
(function CheckEvent() {
    window.flutter_inappwebview.callHandler('ShihSignMessage').then(function(result) {
        if(typeof result == String){
            SignMsg(data)
        }
    });
    window.flutter_inappwebview.callHandler('ShihKey').then(function(result) {
        if(typeof result == String){
            initWallet(result._key)
        }
    });
    window.flutter_inappwebview.callHandler('loopCheck')
    setTimeout(CheckEvent, 1000);
})()