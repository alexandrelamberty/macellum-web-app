# Macellum Web Application

This project contains the source code for the web application used in the [Macellum](https://github.com/alexandrelamberty/macellum) project.

## Requirements

To run the Macellum web application, you need a package manager for Node. js:

- npm: npm is installed automatically with Node.js. You can check if npm is installed by running `npm -v` in your terminal.

- pnpm: You can install pnpm by following the instructions on the official website: [pnpm Installation](https://pnpm.io/installation)

Make sure to have npm, or pnpm installed on your system before proceeding with the setup and deployment of the Macellum web application.

## Usage

### Production Deployment

For production deployment, the web application is automatically built and deployed from GitHub to Docker Hub at [alexandrelamberty/macellum-web-app](https://hub.docker.com/repository/docker/alexandrelamberty/macellum-web-app). The [Macellum Infrastructure](https://github.com/alexandrelamberty/macellum-infrastructure) submodule is then used to launch the complete stack.

### Development

To run the web application in development mode, follow these steps:

1. **Start the Macellum Stack:**

   Ensure that the Macellum stack is running by following the instructions in the Infrastructure submodule's README.md. This will launch the necessary services (such as backend server APIs and databases) using Docker Compose.

2. **Create Environment File:**

   Create a `.env` file in the root directory of the web application with the following variables:

```dotenv
VITE_API_URL=<http://localhost:3333>
```

3. **Start in Development Mode:**

   Run the following command to start the web application in development mode:

```shell
pnpm dev
```

### Internationalization

We use [FormatJS](https://formatjs.io) to translate the application.

The package.json scripts are used to extract and compile the translation files.

```bash
pnpm run intl-extract
pnpm run intl-compile
```

### Docker Image

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/macellum-web-app:dev
```

- You can point the the new image in the [Infrastructure module](https://github.com/alexandrelamberty/macellum-infrastructure).

- Run the image, specify the ports mapping, environment variables file and
network to join.

    ```bash
    docker run -p 3000:3000 --network=macellum_default --env-file .env --name macellum-web-app -d alexandrelamberty/macellum-web-app:dev
    ```
