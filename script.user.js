// ==UserScript==
// @name         Mytorrent.ovh :: Useful Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Functions: Auto displays upload box, Autofills folder input, Auto checks "autostart downloading" option, Modifies "stream" button url to FTP one's
// @author       LeO
// @updateURL    https://github.com/leoglock/Seedbox_Script/raw/master/script.user.js
// @match        http://mytorrent.ovh:9091/transmission/web/
// @match        http://mytorrent.ovh
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	// Don't forget to rename "YOUR_FOLDER". Thanks to ANGA for sharing his seedbox.
    $('a[href="http://www.mytorrent.ovh/downloader/"]').attr('href','http://www.mytorrent.ovh/here/YOUR_FOLDER'); // Modifies stream url to FTP url (path folder)
    document.getElementById('upload_container').style="display:block;"; // Displays the upload box automatically
    document.getElementById('add-dialog-folder-input').value="/home/downloader/here/YOUR_FOLDER"; // Autofills the folder input with a desired name (example: /home/downloader/here/michael).
    document.getElementById('torrent_auto_start').checked="checked"; // Automatically checks the "autostart downloading" option.
})();
