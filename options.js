document.getElementById('save').addEventListener('click', function () {
  var quotes = document.getElementById('quotes').value;
  chrome.storage.sync.set({ quotes: quotes }, function () {
    alert('Quotes saved!');
  });
});

chrome.storage.sync.get({ quotes: '' }, function (items) {
  document.getElementById('quotes').value = items.quotes;
});