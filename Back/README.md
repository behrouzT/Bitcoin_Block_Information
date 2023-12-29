# Backend of Bitcoin Block Information App

This repository houses the backend logic for the Bitcoin Block Information App. The backend, developed using NestJS, offers an API to retrieve and process block information from the Bitcoin blockchain.

## Table of Contents

- [Introduction](#introduction)
- [Controller Overview](#controller-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Swagger Documentation](#swagger-documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The backend for the Bitcoin Block Information App is crafted in NestJS, a progressive Node.js framework. It consists of a single controller handling API requests associated with obtaining block information from the Bitcoin blockchain.

## Controller Overview

### BitcoinController

The `BitcoinController` manages incoming requests regarding Bitcoin block information retrieval. It encompasses a sole endpoint:

- **GET /bitcoin/:block**: Fetches comprehensive information about a specific Bitcoin block using the provided block hash or block number.



## Installation

To set up the backend locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/behrouzT/Bitcoin_Block_Information
   ```

2. Navigate to the project directory:

   ```bash
   cd Back
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Once the installation is complete, start the backend server:

```bash
npm start
```

The backend server will be running at `http://localhost:4000`, where `4000` is the specified port in the NestJS configuration.

## Swagger Documentation

The Swagger documentation for this API is available at [http://localhost:4000/doc](http://localhost:4000/doc).

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **ValidationPipe**: NestJS pipe for request validation.
- **BitcoinService**: Service handling the logic for fetching Bitcoin block information.
- **Jest**: A delightful JavaScript testing framework for Node.js applications, used for unit and integration testing in this project.

