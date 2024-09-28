chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'showWarning') {
    const isListed = request.is_listed;

    // Remove existing notification if any
    const existingNotification = document.getElementById('site-safety-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // notification div
    const notification = document.createElement('div');
    notification.id = 'site-safety-notification';
    notification.style.position = 'fixed';
    notification.style.top = '20px'; // Changed from 'bottom' to 'top'
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.padding = '15px';
    notification.style.borderRadius = '5px';
    notification.style.color = '#fff';
    notification.style.fontSize = '16px';
    notification.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    notification.style.maxWidth = '300px';
    notification.style.wordWrap = 'break-word';

    if (isListed) {
      notification.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Red background
      notification.innerText = 'Warning: This site is listed as dangerous!';
    } else {
      notification.style.backgroundColor = 'rgba(0, 128, 0, 0.8)'; // Green background
      notification.innerText = 'This site is safe.';
    }

    document.body.appendChild(notification);

    // Remove the notification after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
});
