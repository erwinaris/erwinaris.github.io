
**cara instal firefox secara manual di linux:**

1. download firefox di website nya.
2. ikuti command dibawah:
    > - sudo rm -r /opt/firefox // jika tidak ada berkas ini maka tidak perlu menjalankan command ini, hati-hati dalam menggunakan rm -r
    > - sudo mv ~/Downloads/firefox /opt/firefox // sesuaikan berkas yang didownload tadi

3. buat symbolic link
    > sudo ln -s /opt/firefox/firefox /usr/bin/firefox // sesuaikan direktori bin kamu



**membuat desktop shortcut di linux:**

1. buat berkas desktop baru beri nama firefox.desktop dan isi berkas dengan:
    > - #/usr/bin/firefox
    > - [Desktop Entry]
    > - Version=87.0
    > - Type=Application
    > - Terminal=false
    > - Exec=/usr/bin/firefox
    > - Name=Firefox
    > - Comment=firefox
    > - Icon=/opt/firefox/browser/chrome/icons/default/default128.png

2. lihat firefox di folder Desktop kemudian klik 2x, jika muncul popup klik _Trust and Launch_
3. pindahkan firefox.desktop ke applications, gunanya agar firefox muncul di desktop menu. ikuti command dibawah ini:
    > sudo mv ~/Desktop/firefox.desktop /usr/share/applications/    // sesuaikan berkas firefox.desktop disimpan dimana 
