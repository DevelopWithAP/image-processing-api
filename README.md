# image-processing-api
## How to begin:
* Install Node.js locally and initialise a new project by running ```npm init --y```.
## How to compile:
* ```npm run build``` will perform the transpilation from TypeScript tp JavaScript.
## How to test:
* ```npm run test``` will perform all the testing as well as producing a 'build' directory.
* ```npm run lint```  and ```npm run prettier``` will perform all code formatting checks. 
* ```npm run lint-fix``` will perform any necassary error corrections.
## Running the servers:
### Production
* Run ```node build/src/index``` from the project's root directory.
### Development
* Run ```npm run start``` from project's root directory.
## Endpoints
* Main route: http://localhost:3000
* API: 
1. http://localhost:3000/api/images?filename=myFile.jpg will reproduce ```myFile.jpg```
as it exists in the ```images``` directory.
2. http://localhost:3000/api/images?filename=myFile&width=some_width&height=some_height, where ```some_width```
and ```some_height``` are **postive integers**, will produce a resized image and
place it in the newly-created ```thumbnails``` directory in the root of the project.
3. Refreshing the browser or making a previously requested resized image will have no effect on the ```thumbnails```
directory (caching).
