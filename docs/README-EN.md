<div align="center">
  <img src="https://raw.githubusercontent.com/BarudakRosul/internet-available/master/image/logo.svg" alt="Internet Available Logo" width="110"/>
  <h1>Internet Available</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/internet-available/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://www.npmjs.com/package/@barudakrosul/internet-available"><img src="https://img.shields.io/npm/v/@barudakrosul/internet-available" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/internet-available" alt="License"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/internet-available?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/internet-available?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/internet-available/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/internet-available" alt="Issues"/></a>
  </p>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Changelog](#changelog)

## Introduction

Internet Available is a JavaScript library that provides various methods to check internet availability using different approaches.

## Features

Internet Available offers the following features:

- **Ping Check**: Checks internet availability using the `ping` command.
- **Curl Check**: Checks internet availability using the `curl` command.
- **Wget Check**: Checks internet availability using the `wget` command.
- **Net Check**: Checks internet availability using the `net` module.
- **Axios Check**: Checks internet availability using the `axios` module.
- **HTTPS Check**: Checks internet availability using the `https` module.
- **TypeScript Support**: Internet Available is compatible with TypeScript.

## Installation

To install Internet Available locally, follow these installation steps:

- Node.js Library:

   ```shell
   npm install @barudakrosul/internet-available
   ```

- CLI Command:

   ```shell
   npm -g install @barudakrosul/internet-available
   ```

## Usage

To start using Internet Available, follow these steps:

- Node.js Library
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
- CLI Command
  ```shell
  checknet
  ```
  or with text description:
  ```shell
  checknet -v
  ```

Supported commands or options:

<table>
  <tr>
    <td><p align="center"><b>Commands or Options</b></p></td>
    <td><p align="center"><b>Description</b></p></td>
  </tr>
  <tr>
    <td><code>-h</code>, <code>--help</code>, or <code>help</code></td>
    <td>Display help for this tool.</td>
  </tr>
  <tr>
    <td><code>-V</code> or <code>--version</code></td>
    <td>Display the version of this tool.</td>
  </tr>
  <tr>
    <td><code>-v</code> or <code>--verbose</code>, or <code>help</code></td>
    <td>Enable verbose mode (displaying informative text).</td>
  </tr>
  <tr>
    <td><code>-p</code> or <code>--ping</code></td>
    <td>Check internet availability using the <code>ping</code> command.</td>
  </tr>
  <tr>
    <td><code>-c</code> or <code>--curl</code></td>
    <td>Check internet availability using the <code>curl</code> command.</td>
  </tr>
  <tr>
    <td><code>-w</code> or <code>--wget</code></td>
    <td>Check internet availability using the <code>wget</code> command.</td>
  </tr>
  <tr>
    <td><code>-n</code> or <code>--net</code></td>
    <td>Check internet availability using the <code>net</code> module (not recommended for checking internet quota).</td>
  </tr>
  <tr>
    <td><code>-a</code> or <code>--axios</code></td>
    <td>Check internet availability using the <code>axios</code> module (default).</td>
  </tr>
  <tr>
    <td><code>-H</code> or <code>--https</code></td>
    <td>Check internet availability using the <code>https</code> module (not recommended for checking internet quota).</td>
  </tr>
</table>

## Contribution

Contributions to Internet Available are highly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Internet Available is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Internet Available appreciates the support and contributions from individuals and open-source projects, including:

- [Axios](https://axios-http.com/), [Net](https://nodejs.org/api/net.html), and [HTTPS](https://nodejs.org/api/https.html) Modules: Provide functionality for checking internet connection using various methods.
- PING, [Curl](https://curl.se/), and [Wget](https://www.gnu.org/software/wget/) Packages: Contribute to the implementation of internet connection checking through external methods.
- [@FajarKim](https://github.com/FajarKim) - The main developer and creator of the application.
- Open-source community - For valuable contributions to the tools and libraries used in this project.

## Changelog

Stay updated on the latest changes and updates to Internet Available by referring to the [Changelog](https://github.com/BarudakRosul/internet-available/releases).

Thank you for choosing Internet Available! We aim to help you check internet availability easily.
