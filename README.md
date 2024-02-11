<div align="center">
  <img src="https://raw.githubusercontent.com/BarudakRosul/internet-available/master/image/logo.svg" alt="Internet Available Logo" width="110"/>
  <h1>Internet Available</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://www.npmjs.com/package/@barudakrosul/internet-available"><img src="https://img.shields.io/npm/v/@barudakrosul/internet-available" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/internet-available" alt="License"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/internet-available?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/internet-available?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/internet-available" alt="Issues"/></a>
  </p>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Internet Available adalah pustaka JavaScript yang menyediakan berbagai metode untuk memeriksa ketersediaan internet dengan berbagai pendekatan.

## Fitur

Internet Available menawarkan fitur-fitur berikut:

- **Pengecekan Ping**: Memeriksa ketersediaan internet menggunakan perintah `ping`.
- **Pengecekan Curl**: Memeriksa ketersediaan internet menggunakan perintah `curl`.
- **Pengecekan Wget**: Memeriksa ketersediaan internet menggunakan perintah `wget`.
- **Pengecekan Net**: Memeriksa ketersediaan internet menggunakan modul `net`.
- **Pengecekan Axios**: Memeriksa ketersediaan internet menggunakan modul `axios`.
- **Pengecekan HTTPS**: Memeriksa ketersediaan internet menggunakan modul `https`.
- **Mendukung TypeScript**: Internet Available bisa digunakan di TypeScript.

## Instalasi

Untuk menginstal Internet Available secara lokal, ikuti langkah-langkah instalasi ini:

- Librari Node.js:

   ```shell
   npm install @barudakrosul/internet-available
   ```

- Perintah CLI:

   ```shell
   npm -g install @barudakrosul/internet-available
   ```

## Penggunaan

Untuk memulai menggunakan Internet Available, ikuti langkah-langkah ini:

- Librari Node.js
  - CommonJS
    ```javascript
    const checknet = require("@barudakrosul/internet-available");

    // With "ping" command
    const connection = checknet.checkWithPing();
    //
    // With "curl" command
    // const connection = checknet.checkWithCurl();
    //
    // With "wget" command
    // const connection = checknet.checkWithWget();
    //
    // With "net" module (not recommended to check internet quota)
    // (async () => {
    //   const connection = await checknet.checkWithNet();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();
    //
    // With "axios" module
    // (async () => {
    //   const connection = await checknet.checkWithAxios();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();
    //
    // With "https" module (not recommended to check internet quota)
    // (async () => {
    //   const connection = await checknet.checkWithHttps();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();

    if (connection) {
      console.log("Internet is available");
    } else {
      console.log("Internet isn't available");
    }
    ```
  - ECMAScript Module (ESM)
    ```javascript
    import checknet from "@barudakrosul/internet-available";

    // With "ping" command
    const connection = checknet.checkWithPing();
    //
    // With "curl" command
    // const connection = checknet.checkWithCurl();
    //
    // With "wget" command
    // const connection = checknet.checkWithWget();
    //
    // With "net" module (not recommended to check internet quota)
    // (async () => {
    //   const connection = await checknet.checkWithNet();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();
    //
    // With "axios" module
    // (async () => {
    //   const connection = await checknet.checkWithAxios();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();
    //
    // With "https" module (not recommended to check internet quota)
    // (async () => {
    //   const connection = await checknet.checkWithHttps();
    //   if (connection) {
    //    console.log("Internet is available");
    //   } else {
    //    console.log("Internet isn't available");
    //   }
    // })();

    if (connection) {
      console.log("Internet is available");
    } else {
      console.log("Internet isn't available");
    }
    ```
- Perintah CLI
  ```shell
  checknet
  ```
  atau dengan keterangan teks:
  ```shell
  checknet -v
  ```

Perintah atau opsi yang didukung:
<table>
  <tr>
    <td><p align="center"><b>Perintah atau Opsi</b></p></td>
    <td><p align="center"><b>Keterangan</b></p></td>
  </tr>
  <tr>
    <td><code>-h</code>, <code>--help</code>, atau <code>help</code></td>
    <td>Menampilkan bantuan untuk alat ini.</td>
  </tr>
  <tr>
    <td><code>-V</code> atau <code>--version</code></td>
    <td>Menampilkan versi alat ini.</td>
  </tr>
  <tr>
    <td><code>-v</code>, <code>--verbose</code>, atau <code>help</code></td>
    <td>Mengaktifkan mode verbose (menampilkan keterangan teks).</td>
  </tr>
  <tr>
    <td><code>-p</code> atau <code>--ping</code></td>
    <td>Cek ketersediaan internet dengan menggunakan perintah <code>ping</code>.</td>
  </tr>
  <tr>
    <td><code>-c</code> atau <code>--curl</code></td>
    <td>Cek ketersediaan internet dengan menggunakan perintah <code>curl</code>.</td>
  </tr>
  <tr>
    <td><code>-w</code> atau <code>--wget</code></td>
    <td>Cek ketersediaan internet dengan menggunakan perintah <code>wget</code>.</td>
  </tr>
  <tr>
    <td><code>-n</code> atau <code>--net</code></td>
    <td>Cek ketersediaan internet dengan menggunakan modul <code>net</code> (tidak direkomendasikan untuk mengecek kuota internet).</td>
  </tr>
  <tr>
    <td><code>-a</code> atau <code>--axios</code></td>
    <td>Cek ketersediaan internet dengan menggunakan modul <code>axios</code> (default).</td>
  </tr>
  <tr>
    <td><code>-H</code> atau <code>--https</code></td>
    <td>Cek ketersediaan internet dengan menggunakan modul <code>https</code> (tidak direkomendasikan untuk mengecek kuota internet).</td>
  </tr>
</table>

## Berkontribusi

Kontribusi pada Internet Available sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Internet Available dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Internet Available menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- Modul [Axios](https://axios-http.com/), [Net](https://nodejs.org/api/net.html), dan [HTTPS](https://nodejs.org/api/https.html): Menyediakan fungsionalitas cek koneksi internet dengan berbagai metode.
- Paket PING, [Curl](https://curl.se/), dan [Wget](https://www.gnu.org/software/wget/): Berkontribusi dalam mengimplementasikan cek koneksi internet dengan metode eksternal.
- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Internet Available dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/internet-available/releases).

Terima kasih telah memilih Internet Available! Kami bertujuan untuk membantu Anda memeriksa ketersediaan internet secara mudah.
