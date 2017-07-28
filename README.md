# Retro Güvenlik Sistemleri Landing Pages.

[![npm version](https://badge.fury.io/js/gulp-browsersync-jade-sass-starter.svg)](https://badge.fury.io/js/gulp-browsersync-jade-sass-starter)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/piyushkalasariya/gulp-browsersync-jade-sass-starter/blob/master/LICENSE)

Bu proje gulp ile görev otomasyonu yardımıyla pug ve sass kullanımını sağlar.


### Nasıl yüklenir ?
`git` komutları kullanarak repository yi klonlayabilirsiniz.
```
git clone https://github.com/aydingundeger/retroguvenlik-sources
```
veya `node.js` komutları kullanarak indirmeye başlayın.
```
npm install retroguvenlik-sources -g
```

### Nasıl çalıştırılır ?

İlk olarak `npm` kullanarak gerekli dosyaları yükleyin.
```
npm install
```
Daha sonra `gulp` komutu kullanarak serverı çalıştırır pug ve sass dosyalarını derleyebilirsiniz .
```
gulp
```

### Özellikler

1. Browsersync aracılığı ile cross-browser testleri yapmanızı sağlar.
2. Hata mesajlarını sistem mesajları aracılığıyla taşır.
3. Sass file with comman mixins(with usage) and variables.
4. Pug templateleri ile JSON ve Kısmi şablonları taşır.

### Proje de kullanılan teknolojiler

1. [browser-sync](https://github.com/browsersync/browser-sync) cross-browser testlerini tarayıcılar üzerinden tam zamanlı çalıştırır.
2. [gulp-pug](https://github.com/phated/gulp-pug) pug dosyalarını derler.
3. [gulp-data](https://github.com/colynb/gulp-data) proje de veri kaynağını JSON olarak tanımlar. Verileri Pug aracılığı ile taşır.
4. [gulp-sass](https://github.com/dlmanning/gulp-sass) sass dosyalarını derler.
5. [gulp-plumber](https://github.com/floatdrop/gulp-plumber) gulp eklentilerinde kaynaklanan hataların nedenini gösterir.
6. [gulp-notify](https://github.com/mikaelbr/gulp-notify) gulp için kullanılan bildirim eklentisi.
7. [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) cross-browser testleri için css değerlerini tarayıcılara göre düzenler.
8. [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) resim formatında ki resim özelliği taşıyan objelerin boyutunu düşürür.
9. [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) html dosyalarını minify ederek dosya boyutunu düşürür.
10. [gulp-csso](https://github.com/ben-eb/gulp-csso) css dosyalarını minify ederek dosya boyutunu düşürür.

### MIT Licence
```
Copyright (c) 2017 Aydın Gündeğer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```