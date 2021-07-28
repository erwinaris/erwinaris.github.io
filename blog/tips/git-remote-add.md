**git remote add repository**

1. gti init
2. git add . atau * atau <files/folder>
3. git commit -m "version"
4. git push -u origin master
    jika error seperti ini
> fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

maka ->
5. git remote -v

jika masih kosong maka tambahkan dulu repository nya
6. git remote add origin <alamat repository / https://github.com/erwinaris/erwinaris.github.io.git>

7. git push -u origin master


**lihat repository githubnya**

[image]("/images/menyimpan-branch.png")

lihat github pagenya

[image]("/images/menyimpan-branch.png")

ubah ke branch mana kamu menyimpan (saya pilih master)


