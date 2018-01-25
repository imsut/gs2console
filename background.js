function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

var regex = RegExp('gs://');

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    if (regex.test(text)) {
      navigate(text.replace(regex, "https://console.cloud.google.com/storage/browser/"));
    } else if (text.startsWith("//")) {
      navigate("https://console.cloud.google.com/storage/browser/" + text.substring(2));
    } else {
      navigate("https://console.cloud.google.com/storage/browser/" + text);
    }
  }
);
