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
    $('select>option:eq(2)').attr('selected', 'selected').trigger('change'); // Automatically filtering downloading torrents so that you can easily find your downloading torrent(s) in the list
    document.getElementById('upload_container').style="display:block;"; // Automatically displaying the upload box.
    document.getElementById('add-dialog-folder-input').value="/home/downloader/here/YOUR_FOLDER/"; // Automatically auto-filling the folder input with a desired name (example: /home/downloader/here/michael).
    document.getElementById('torrent_auto_start').checked="checked"; //  Automatically checking the "autostart downloading" option automatically.
    $(document).ready(function(){
    $('a').each(function(){
        this.href = this.href.replace('/downloader/', '/here/YOUR_FOLDER/'); // Modifying "stream" button url to FTP one's (with desired folder)
    });
});
})();
