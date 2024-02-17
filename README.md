# Macellum Web Application

This project contains the source code for the web application used in the [Macellum](https://github.com/alexandrelamberty/macellum) project.

## Development

### Build Docker image

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/macellum-web-ap:latest
```

Run the image, we specify the ports mapping, environment variables file and
network to join.

```bash
docker run -p 3000:3000 --network=nidus_default --env-file .env --name nidus-web -d alexandrelamberty/nidus-web:latest
```
