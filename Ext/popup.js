function clickHandler(e) {
    chrome.tabs.update({url: "https://www.facebook.com"});
    window.close();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});
