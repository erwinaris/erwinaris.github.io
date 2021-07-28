Remove or disable popup keyrings google chrome / chromium:

> sudo vim /usr/share/applications/google-chrome.desktop 

edit or add _--password-store=basic_ in Exec:

> Exec=/usr/bin/google-chrome-stable --incognito --password-store=basic

