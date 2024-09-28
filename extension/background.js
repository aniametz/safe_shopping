chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    // Send the URL to the backend
    fetch('http://localhost:5000/check_site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: tab.url })
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.error('Error response:', text);
            throw new Error(`HTTP error! status: ${response.status}`);
          });
        }
        return response.json();
      })
      .then(data => {
        chrome.tabs.sendMessage(tabId, {
          action: 'showWarning',
          is_listed: data.is_listed
        }, function(response) {
          if (chrome.runtime.lastError) {
            console.warn('Content script not found in tab:', tabId);
          } else {
          }
        });
      })
      .catch(error => {
        console.error('Error in fetch operation:', error);
      });
  }
});
