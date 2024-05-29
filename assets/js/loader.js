//document.documentElement.style.overflow = 'hidden'; // for html
window.addEventListener("load", function () {
  // Hide the loader
  document.getElementById('site-loader').style.display = 'none';
  // Show the content
  document.getElementById('site-page').classList.remove('hidden');
  // Remove overflow hidden from the root element
  document.documentElement.style.overflow = null; // for html
});