# Borland Turbo IDE

In the early 1980's, Borland released its flagship product, Turbo Pascal. A few years later the Turbo C and C++ IDE was released.

![Turbo C++](http://1.bp.blogspot.com/-idRrjGCQEJY/VCsdsGN0d0I/AAAAAAAAAsA/BylmvJbiA4A/s1600/Turbo%2BC%2B%2B%2B3.0.jpg)

This project is an experiment to implement the same functionality in web technologies, using React, MobX, Node.js and WebAssembly.

## Getting started
#### Install
```
yarn
```

#### Run app
First, run a local server:
```
yarn server
```

Then, start the frontend by running the following command:

(it automatically opens a browser tab at `localhost:3000` or other available port)
```
yarn start
```

#### Run storybook
After running the following command, manually open a browser tab at `localhost:6007`:
```
yarn storybook
```

#### Run original TurboC inside DosBox
(Instructions apply only to Mac OS X, but easy to infer on other operating systems)

First, install application from [https://sourceforge.net/projects/turbo-for-mac/]()`.

Then, assuming the app is located at `/Applications/TurboC++`, run this command (you can change the folder in `package.json`):
```
yarn turbo-c
```

## License
This project is licensed under the terms of the MIT license.
