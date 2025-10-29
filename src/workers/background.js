



chrome.downloads.onChanged.addListener(async (delta) => {
    try {
        if(delta && delta.state?.current === "complete") {
            debugger;
            const { id: tabId } = (await chrome.tabs.query({
                active: true
            }))?.[0];

            const downloadItem = (await chrome.downloads.search({
                id: delta.id
            }))?.[0];

            if(downloadItem.url.match(/^blob:https:\/\/app\.svgator\.com/)?.[0] && tabId){
                chrome.tabs.sendMessage(tabId, 'download-complete', );
            }
        }
    } catch (e) {
        console.error(e);
    }
})