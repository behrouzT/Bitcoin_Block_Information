# Bitcoin Block Information App

Welcome to the Bitcoin Block Information App! This repository contains both the frontend and backend applications for retrieving detailed information about Bitcoin blockchain blocks.

## Table of Contents

- [Introduction](#introduction)
- [Running with Docker Compose](#running-with-docker-compose)
- [Running Frontend with Node.js](#running-frontend-with-nodejs)
- [Running Backend with Node.js](#running-backend-with-nodejs)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Bitcoin Block Information App consists of a frontend and backend. The frontend, located in the `Front` directory, is a React-based web application. The backend, located in the `Back` directory, is developed using NestJS and provides APIs to fetch block information from Bitcoin blockchain.

Please refer to the respective README files in the `Front` and `Back` directories for detailed instructions on each application:

- **Frontend README**: [Front/README.md](Front/README.md)
- **Backend README**: [Back/README.md](Back/README.md)

## Running with Docker Compose

To run both the frontend and backend using Docker Compose:

1. Make sure you have Docker installed on your system.
2. Navigate to the parent directory containing the `docker-compose.yml` file.
3. Run the following command:

   ```bash
   docker-compose up
   ```

   This command will build and start both the frontend and backend containers, exposing the frontend at `http://localhost:3000` and the backend at `http://localhost:4000`.

## Running Frontend with Node.js

To run the frontend application without Docker using Node.js, please refer to the instructions provided in the [Front/README.md](Front/README.md) file.

## Running Backend with Node.js

To run the backend application without Docker using Node.js, please refer to the instructions provided in the [Back/README.md](Back/README.md) file.

## Contributing

Contributions to enhance and improve this application are welcome. Feel free to fork the repository, make changes, and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.