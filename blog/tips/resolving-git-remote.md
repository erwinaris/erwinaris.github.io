# blog  Hugo / framework hugo

masalah git remote menggunakan submodule :

1. yang saya lakukan cloning repository github page ke direktori public menggunakan :
> git submodule add -b master https://github.com/erwinaris/erwinaris.github.io.git public

2. pindah direktori public
> cd public/

3. tambahkan command dibawah :
> git add . / git add *
> git commit -m "isi komit"
> git push (tidak menggunakan "git push -u origin master" karena akan terjadi error)
