chrome.browserAction.onClicked.addListener(function() {
  alert('start');
  var original = $($("img[src^='/printer/']")[0]);
  var copy = original.clone();
  copy.attr('src',"/printer/previewcammjpg?url=http%3A%2F%2F192.168.100.206%3A8080%2F%3Faction%3Dstream&rand=2EoWiX7PRy");
  var frame = original.parent();
  var framecopy = frame.clone();
  framecopy.find("img").remove();
  framecopy.append(copy);
  var grandparent = frame.parent();
  grandparent.append(framecopy);
  alert('ended');
});
