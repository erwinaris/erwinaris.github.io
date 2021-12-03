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



### gunakan git push -f origin master ketika kamu benar2 ingin menimpa isi file di repository

### tapi jika kamu ragu menggunakan cara diatas maka solusinya adalah tetap membuat / mengenerate token kemudian lakukan seperti ini di terminal "git remote set-url origin https://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@github.com/erwinyani/erwinyani.github.io/" (git remote set-url origin https://<token>@github.com/<username>/<repo>)


