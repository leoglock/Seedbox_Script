// ==UserScript==
// @name         Transmission :: Useful Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Functions: Auto displays upload box, Autofills folder input, Auto checks "autostart downloading" option, Modifies "stream" button url to FTP one's
// @author       LeO
// @updateURL    https://github.com/leoglock/Seedbox_Script/blob/master/script.user.js
// @match        http://*/transmission/web/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	// Don't forget to rename "YOUR_FOLDER".
    document.getElementById('upload_container').style="display:block;"; // Displays the upload box automatically
    document.getElementById('add-dialog-folder-input').value="/home/downloader/here/leo/"; // Autofills the folder input with a desired name (example: /home/downloader/here/michael).
    document.getElementById('torrent_auto_start').checked="checked"; // Automatically checks the "autostart downloading" option.
    $(document).ready(function(){
    $('a').each(function(){
        this.href = this.href.replace('/downloader/', '/here/YOUR_FOLDER/'); // Modifies "stream" button url to FTP one's (with desired folder)
    });
});
})();
