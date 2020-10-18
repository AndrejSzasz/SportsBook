# SportsBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5 and is currently on 8.3.6

There is a live demo available at https://andrejszasz.github.io/SportsBook/

API documentation is at https://sportsbook-api.azurewebsites.net/swagger/index.html
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### prod build Angular 8 View Engine

```
$ time ./node_modules/.bin/ng build --prod

chunk {0} runtime.7d9d4678f9511567f211.js (runtime) 1.45 kB [entry] [rendered]
chunk {1} main.47001bee16b3d7f763bc.js (main) 652 kB [initial] [rendered]
chunk {2} polyfills.5d9b5add577af7459fa4.js (polyfills) 36.3 kB [initial] [rendered]
chunk {3} styles.c52292fd2d1540f8b644.css (styles) 60.6 kB [initial] [rendered]
Date: 2020-10-18T01:01:00.330Z - Hash: d3c51138434d369b29d2 - Time: 126778ms

real    2m29.524s
user    0m0.136s
sys     0m0.292s

Date: 2020-10-18T01:07:03.818Z - Hash: d3c51138434d369b29d2 - Time: 129766ms

real    2m32.343s
user    0m0.123s
sys     0m0.323s

Date: 2020-10-18T01:13:01.229Z - Hash: d3c51138434d369b29d2 - Time: 131855ms

real    2m34.693s
user    0m0.122s
sys     0m0.292s

```

### prod build Angular 8 Ivy

```
$ time ./node_modules/.bin/ng build --prod
Date: 2020-10-18T01:25:10.021Z - Hash: f536ddaa3a43072ada41 - Time: 483108ms

real    8m25.256s
user    0m0.091s
sys     0m0.370s

$ time ./node_modules/.bin/ng build --prod

chunk {0} runtime.7d9d4678f9511567f211.js (runtime) 1.45 kB [entry] [rendered]
chunk {1} main.ff649afac7a5c14c8f85.js (main) 680 kB [initial] [rendered]
chunk {2} polyfills.5d9b5add577af7459fa4.js (polyfills) 36.3 kB [initial] [rendered]
chunk {3} styles.c52292fd2d1540f8b644.css (styles) 60.6 kB [initial] [rendered]
Date: 2020-10-18T01:31:37.075Z - Hash: f9f64e962bfa112c8e6e - Time: 188853ms

real    3m31.277s
user    0m0.090s
sys     0m0.291s

Date: 2020-10-18T01:35:26.588Z - Hash: f9f64e962bfa112c8e6e - Time: 115507ms

real    2m17.410s
user    0m0.122s
sys     0m0.369s

Date: 2020-10-18T01:40:12.471Z - Hash: f9f64e962bfa112c8e6e - Time: 122912ms

real    2m25.135s
user    0m0.060s
sys     0m0.323s
```

### prod build Angular 9 Ivy

```
$ time ./node_modules/.bin/ng build --prod

chunk {} runtime.c51bd5b1c616d9ffddc1.js (runtime) 1.45 kB [entry] [rendered]
chunk {1} main.be4c2d5286b05db770f0.js (main) 658 kB [initial] [rendered]
chunk {2} polyfills.fb97d1264b2f08af2d29.js (polyfills) 36.1 kB [initial] [rendered]
chunk {3} styles.c52292fd2d1540f8b644.css (styles) 61.4 kB [initial] [rendered]
Date: 2020-10-18T01:45:47.323Z - Hash: 209ba81f9c7bf405a65c - Time: 194406ms

real    3m46.094s
user    0m0.168s
sys     0m0.321s

Date: 2020-10-18T01:51:50.651Z - Hash: 209ba81f9c7bf405a65c - Time: 124075ms

real    2m30.372s
user    0m0.138s
sys     0m0.291s

Date: 2020-10-18T01:55:26.761Z - Hash: 209ba81f9c7bf405a65c - Time: 125077ms

real    2m31.162s
user    0m0.106s
sys     0m0.354s
```

### prod build Angular 9 View Engine
```
$ time ./node_modules/.bin/ng build --prod                                                                              
chunk {} runtime.c51bd5b1c616d9ffddc1.js (runtime) 1.45 kB [entry] [rendered]
chunk {1} main.a27e7dd41d82c009472b.js (main) 645 kB [initial] [rendered]
chunk {2} polyfills.fb97d1264b2f08af2d29.js (polyfills) 36.1 kB [initial] [rendered]
chunk {3} styles.c52292fd2d1540f8b644.css (styles) 61.4 kB [initial] [rendered]
Date: 2020-10-18T02:08:54.162Z - Hash: ba37519f4df70b194926 - Time: 198840ms

real    3m40.795s
user    0m0.167s
sys     0m0.335s

Date: 2020-10-18T02:13:08.848Z - Hash: ba37519f4df70b194926 - Time: 139696ms

real    2m41.999s
user    0m0.121s
sys     0m0.339s

Date: 2020-10-18T02:16:16.070Z - Hash: ba37519f4df70b194926 - Time: 135830ms

real    2m38.272s
user    0m0.137s
sys     0m0.338s
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
