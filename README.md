<div align="center">
  <img src="./image/logo.svg" alt="Internet Available Logo" width="110"/>
  <h1>Internet Available</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/internet-available/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/internet-available/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/internet-available"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Finternet-available" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/internet-available" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/internet-available"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Finternet-available" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/internet-available?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/internet-available?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/internet-available" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Penggunaan CLI](#penggunaan-cli)
6. [Berkontribusi](#berkontribusi)
7. [Lisensi](#lisensi)
8. [Penghargaan](#penghargaan)
9. [Donasi](#donasi)
10. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Internet Available adalah sebuah modul Node.js yang menyediakan berbagai metode untuk memeriksa ketersediaan koneksi internet. Ini mencakup metode menggunakan `ping`, `curl`, `wget`, serta modul `net`, `axios`, dan `https`.

## Fitur

Internet Available menawarkan fitur-fitur berikut:

- Berbagai metode untuk memeriksa ketersediaan internet.
- Mendukung pengecekan menggunakan paket `ping`, `curl`, dan `wget` serta modul `net`, `axios`, dan `https`.
- Dapat diintegrasikan ke dalam kode TypeScript.
- Menyediakan opsi CLI untuk memeriksa koneksi internet dari terminal.

## Instalasi

Untuk menginstal Internet Available secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/internet-available
```

Untuk menginstal secara global, gunakan:

```shell
npm install -g @barudakrosul/internet-available
```

## Penggunaan

Untuk memulai menggunakan Internet Available, import modulnya terlebih dahulu:

**1\. CommonJS**
```javascript
const checknet = require("@barudakrosul/internet-available");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import checknet from "@barudakrosul/internet-available";
```

**3\. TypeScript**
```typescript
import checknet from "@barudakrosul/internet-available";
```

Contoh penggunaan menggunakan `ping`:

```javascript
console.log(checknet.checkWithPing() ? "Internet is available" : "Internet is not available");
```

Contoh penggunaan menggunakan `curl`:

```javascript
console.log(checknet.checkWithCurl() ? "Internet is available" : "Internet is not available");
```

Contoh penggunaan menggunakan `wget`:

```javascript
console.log(checknet.checkWithWget() ? "Internet is available" : "Internet is not available");
```

Contoh penggunaan menggunakan modul `net`:

```javascript
(async () => {
  console.log(await checknet.checkWithNet() ? "Internet is available" : "Internet is not available");
})();
```

Contoh penggunaan menggunakan modul `axios`:

```javascript
(async () => {
  console.log(await checknet.checkWithAxios() ? "Internet is available" : "Internet is not available");
})();
```

Contoh penggunaan menggunakan modul `https`:

```javascript
(async () => {
  console.log(await checknet.checkWithHttps() ? "Internet is available" : "Internet is not available");
})();
```

## Penggunaan CLI

Untuk menggunakan alat ini dari baris perintah, Anda dapat menggunakan perintah `checknet` dengan opsi berikut:

<table>
  <tr>
    <td><p align="center">Opsi</p></td>
    <td><p align="center">Keterangan</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-h</code> atau <code>--help</code></p></td>
    <td><p align="left">Menampilkan bantuan untuk perintah ini.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-V</code> atau <code>--version</code></p></td>
    <td><p align="left">Menampilkan versi saat ini.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-v</code> atau <code>--verbose</code></p></td>
    <td><p align="left">Mengaktifkan mode verbose (keterangan teks).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-p</code> atau <code>--ping</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan paket <code>ping</code>.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-c</code> atau <code>--curl</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan paket <code>curl</code>.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-w</code> atau <code>--wget</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan paket <code>wget</code>.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-n</code> atau <code>--net</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan modul <code>net</code>.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-a</code> atau <code>--axios</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan modul <code>axios</code>.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-H</code> atau <code>--https</code></p></td>
    <td><p align="left">Cek ketersediaan internet menggunakan modul <code>https</code>.</p></td>
  </tr>
</table>

Contoh penggunaan CLI:

```shell
$ checknet --ping
```


Contoh penggunaan CLI menggunakan opsi `--verbose`:

```shell
$ checknet --ping --verbose
checknet: internet is available
```
## Berkontribusi

Kontribusi pada Internet Available sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Internet Available dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Internet Available menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- Modul [Axios](https://axios-http.com/), [Net](https://nodejs.org/api/net.html), dan [HTTPS](https://nodejs.org/api/https.html) - Menyediakan fungsionalitas untuk mengecek ketersediaan internet dengan menggunakan metode internal.
- Paket PING, [Curl](https://curl.se/), dan [Wget](https://www.gnu.org/software/wget/) - Menyediakan fungsionalitas untuk mengecek ketersediaan internet dengan menggunakan metode eksternal.
- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Internet Available dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/internet-available/releases).

Terima kasih telah memilih Internet Available! Kami bertujuan untuk memberikan solusi yang mudah untuk memeriksa ketersediaan koneksi internet.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)