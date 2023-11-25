# Static Site Generator with Docker React

![GitHub release (with filter)](https://img.shields.io/github/v/release/InumberX/ssg-with-docker-react) ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/InumberX/ssg-with-docker-react) ![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/InumberX/ssg-with-docker-react) ![GitHub issues](https://img.shields.io/github/issues/InumberX/ssg-with-docker-react) ![GitHub closed issues](https://img.shields.io/github/issues-closed/InumberX/ssg-with-docker-react) ![GitHub pull requests](https://img.shields.io/github/issues-pr/InumberX/ssg-with-docker-react) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/InumberX/ssg-with-docker-react)

## Development with Node.js

Start a shell such as PoworShell and navigate to the root of the project.

### Installing packages

Install the Node.js package.

```shell
yarn install
```

### Execution of development tasks

Execute the following command.

```shell
yarn dev
```

The following URL will take you to the screen.

http://localhost:3000/

- Press "Ctrl + C" to stop

### Execution of Storybook

Execute the following command.

```shell
yarn storybook
```

The following URL will take you to the screen.

http://localhost:6006/

- Press "Ctrl + C" to stop

### Build

Execute the following command to execute the build.

```shell
yarn build
```

### Syntax Check

```shell
yarn lint
```

### Formatter

#### Check

```shell
yarn prettier
```

#### Check and Format

```shell
yarn prettier:fix
```

### Formatter (SCSS)

#### Check

```shell
yarn stylelint
```

#### Check and Format

```shell
yarn stylelint:fix
```

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
docker compose exec node yarn dev
```

The following URL will take you to the screen.

http://localhost:3000/

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

### Syntax Check

```shell
docker compose exec frontend yarn lint
```

### Formatter

#### Check

```shell
docker compose exec frontend yarn prettier
```

#### Check and Format

```shell
docker compose exec frontend yarn prettier:fix
```

### Formatter (SCSS)

#### Check

```shell
docker compose exec frontend yarn stylelint
```

#### Check and Format

```shell
docker compose exec frontend yarn stylelint:fix
```
