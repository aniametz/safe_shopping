document.getElementById('checkButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    document.getElementById('result').innerText = 'Please enter a URL.';
    return;
  }

  fetch('http://localhost:5000/check_site', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
    .then(response => response.json())
    .then(data => {
      if (data.is_listed) {
        document.getElementById('result').innerText = 'Warning: This site is listed as dangerous! (Safe Shopper)';
        document.getElementById('result').style.color = "#ff5a5f";
      } else {
        document.getElementById('result').innerText = 'This site is safe. (Safe Shopper)';
        document.getElementById('result').style.color = "#a8c256";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerText = 'Error checking site. (Safe Shopper)';
      document.getElementById('result').style.color = "#ff5a5f";
    });
});
