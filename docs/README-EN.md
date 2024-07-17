<div align="center">
  <img src="../image/logo.svg" alt="Internet Available Logo" width="110"/>
  <h1>Internet Available</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
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

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [CLI Usage](#cli-usage)
6. [Contribution](#contribution)
7. [License](#license)
8. [Acknowledge](#acknowledge)
9. [Donate](#donate)
10. [Changelog](#changelog)

## Introduction

Internet Available is a Node.js module that provides various methods for checking the availability of an internet connection. It includes methods using `ping`, `curl`, `wget`, as well as the `net`, `axios`, and `https` modules.

## Features

Internet Available offers the following features:

- Various methods for checking internet availability.
- Supports checking using `ping`, `curl`, and `wget` packages as well as `net`, `axios`, and `https` modules.
- Can be integrated into TypeScript code.
- Provides CLI option to check internet connection from terminal.

## Installation

To install Internet Available locally, follow these installation steps:

```shell
npm install @barudakrosul/internet-available
```

To install globally, use:

```shell
npm install -g @barudakrosul/internet-available
```

## Usage

To start using Internet Available, import the module first:

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

Example of use with `ping`:

```javascript
console.log(checknet.checkWithPing() ? "Internet is available" : "Internet is not available");
```

Example of use with `curl`:

```javascript
console.log(checknet.checkWithCurl() ? "Internet is available" : "Internet is not available");
```

Example of use with `wget`:

```javascript
console.log(checknet.checkWithWget() ? "Internet is available" : "Internet is not available");
```

Example of use with the `net` module:

```javascript
(async () => {
  console.log(await checknet.checkWithNet() ? "Internet is available" : "Internet is not available");
})();
```

Example of use with the `axios` module:

```javascript
(async () => {
  console.log(await checknet.checkWithAxios() ? "Internet is available" : "Internet is not available");
})();
```

Example of use with the `https` module:

```javascript
(async () => {
  console.log(await checknet.checkWithHttps() ? "Internet is available" : "Internet is not available");
})();
```

## CLI Usage

To use this tool from the command line, you can use the `checknet` command with the following options:

<table>
  <tr>
    <td><p align="center">Option</p></td>
    <td><p align="center">Description</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-h</code> or <code>--help</code></p></td>
    <td><p align="left">Display help for this command.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-V</code> or <code>--version</code></p></td>
    <td><p align="left">Display the current version.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-v</code> or <code>--verbose</code></p></td>
    <td><p align="left">Enable verbose mode (text captions).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-p</code> or <code>--ping</code></p></td>
    <td><p align="left">Check internet availability using <code>ping</code> package.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-c</code> or <code>--curl</code></p></td>
    <td><p align="left">Check internet availability using <code>curl</code> package.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-w</code> or <code>--wget</code></p></td>
    <td><p align="left">Check internet availability using <code>wget</code> package.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-n</code> or <code>--net</code></p></td>
    <td><p align="left">Check internet availability using <code>net</code> module.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-a</code> or <code>--axios</code></p></td>
    <td><p align="left">Check internet availability using <code>axios</code> module.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-H</code> or <code>--https</code></p></td>
    <td><p align="left">Check internet availability using <code>https</code> module.</p></td>
  </tr>
</table>

Example of CLI usage:

```shell
$ checknet --ping
```

Example of using the CLI with the `--verbose` option:

```shell
$ checknet --ping --verbose
checknet: internet is available
```
## Contribution

Contributions to Internet Available are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Internet Available is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Internet Available appreciates the support and contributions of the following individuals and open source projects:

- [Axios](https://axios-http.com/), [Net](https://nodejs.org/api/net.html), and [HTTPS](https://nodejs.org/api/https.html) modules - Provides functionality to check internet availability using internal methods.
- PING, [Curl](https://curl.se/), and [Wget](https://www.gnu.org/software/wget/) packages - Provides functionality to check internet availability using external methods.
- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Internet Available by referring to [Changelog](https://github.com/BarudakRosul/internet-available/releases).

Thank you for choosing Internet Available! We aim to provide an easy solution to check internet connection availability.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)