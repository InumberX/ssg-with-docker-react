# Static Site Generator with Docker React

## Development with Docker

Start a shell such as PoworShell and navigate to the root of the project.

### Launching Containers

The container is started by executing the following command.

```shell
docker compose up -d
```

### Installing packages

Install the Node.js package.

```shell
docker compose exec node yarn install
```

### Execution of development tasks

Execute the following command.

```shell
docker compose exec node yarn dev --host
```

The following URL will take you to the screen.

http://localhost:5173/

- Press "Ctrl + C" to stop

### Execution of Storybook

Execute the following command.

```shell
docker compose exec node yarn storybook
```

The following URL will take you to the screen.

http://localhost:6006/

- Press "Ctrl + C" to stop

### Build

Execute the following command to execute the build.

```shell
docker compose exec node yarn build
```

### Stopping Containers

Execute the following command to stop the container.

```shell
docker compose down
```
