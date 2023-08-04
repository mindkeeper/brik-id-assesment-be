# Klontong Backend API Documentation

<p align="left">
  Built with:
</p>

[![Express-JS](https://img.shields.io/badge/Express--JS-%5E4.18.2-green)](https://www.npmjs.com/package/express)
[![Sequelize-JS](https://img.shields.io/badge/Sequelize--JS-%5E6.32.1-blue)](https://www.npmjs.com/package/sequelize)
[![Postgres](https://img.shields.io/badge/pg-%5E8.11.2-blue)](https://www.npmjs.com/package/pg)

<!-- **Base URL**: Replace `[base_url]` with the actual base URL where your API is hosted.
 -->

## Table of Contents

- [Introduction](#introduction)
- [How to Run the App](#how-to-run-the-application)
- [Deployment](#deployment)

## Introduction

Welcome to the documentation for the Shop Backend API. This API powers a shop backend and is built using Express.js, Sequelize, and PostgreSQL.

## How to Run the Application

### 1. Clone this repository

Clone this repository by run the following code:

```
$ git clone <this-repo-url>
```

### 2. Install dependency packages

Install dependency packages by run the following code inside project folder:

```
$ npm install
```

### 3. Configure .env file

Configure .env file by create file named .env inside project folder and add this line to the file:

```
NODE_ENV = your current env

<!-- development database -->
DB_USER_DEV = your database username
DB_PASS_DEV = your database password
DB_HOST_DEV = your database host
DB_NAME_DEV = your database name
DB_PORT_DEV = your database port

<!-- production database -->
DB_USER_PROD = your database username
DB_PASS_PROD = your database password
DB_HOST_PROD = your database host
DB_NAME_PROD = your database name
DB_PORT_PROD = your database port

SECRET_KEY = your jwt secret key
ISSUER = your jwt issuer
REFRESH_TOKEN_SECRET_KEY = your secret key for refresh token
REFRESH_TOKEN_ISSUER = your issuer for refresh token
EXPIRES_IN = jwt expired at

CLOUDINARY_CLOUD_NAME = your cloud name
CLOUDINARY_API_SECRET = your cloud api secret
CLOUDINARY_API_KEY = your api key
```

### 4. Database Migration

To migrate database and its seeders, run the following code

```
<!-- for development -->
$ npm run migrate-dev:up
$ npm run create-seeds-dev

<!-- for production -->
$ npm run migrate-prod:up
$ npm run create-seeds-prod

```

### 5. Run projects

Run this projects by run the following code:

```
$ npm run dev
```

## Deployment

[Vercel deploy link](https://brik-id-assesment-be.vercel.app/)
