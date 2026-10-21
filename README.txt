AMRUTHA BIRTHDAY WEBSITE - FIXED VERSION

Files:
- index.html  : page content
- style.css   : design and animations
- script.js   : open/replay interactions and confetti

HOW TO USE LOCALLY
1. Extract the ZIP.
2. Keep all four files in the same folder.
3. Double-click index.html to open it in your browser.
4. Click "Open your letter". Click the envelope itself also works.
5. Click "Read it again" to return to the envelope.

HOW TO CUSTOMIZE
Open script.js and edit:
  recipientName: "Amrutha",
  senderName: "Your Rakhi brother"

For GitHub Pages, upload index.html, style.css, and script.js together to the
same folder (the repository root is simplest). Make sure the filenames and
capitalization match exactly. Then wait a minute and hard-refresh the website
with Ctrl+F5.

This version keeps all element IDs in sync, loads JavaScript with defer, and
waits for DOMContentLoaded before attaching click handlers.
