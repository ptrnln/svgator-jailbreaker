
chrome.downloads.onChanged.addListener(async (delta) => {
    try {
        if(delta && delta.state?.current === "complete") {
            const { id } = (await chrome.tabs.query({
                active: true
            }))?.[0];
            if(id) chrome.tabs.sendMessage(id, 'download-complete', );
        }
    } catch (e) {
        console.error(e);
    }
})