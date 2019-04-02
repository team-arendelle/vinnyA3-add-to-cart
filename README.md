# FEC - Zonias - Add to Cart 

> A visual clone of Amazon's product cart.  Complete with multiple buying
> options and reusable components: tooltip, modal.


![component_hero](https://github.com/team-arendelle/vinnyA3-add-to-cart/blob/master/fec-intro.png?raw=true)


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions - work in progress ....

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node: *>=10.15.0* 
- npm: *>=6.4.1*

## Development

### Installing Dependencies

All necessary dependencies are include in the project's `package.json`.  To get started ...
from within the project's root directory, run: `npm install`

### Starting the project

First, make sure that you have an *API KEY* for google's geolocation API.  If
you do not have one / want to make one, make sure to remove / comment out the
code dependent on the key (located in `server/controllers/api/index.js`).

**[If you are using an API key]**: Make sure that you have a `secret.js` config file
(should reside in `server/config`).  This file should never be commited to your
repo; by default, `.gitignore` will ensure that this does not happen 

-----

A design decision was made to keep both client and server code separate from one
another.  As a result, we run both services as separate processes.  Luckily, the
client and server are configured to play nice with one another.

To run the client: `npm start client:dev`
To run the server: `npm run server:dev`

**[Tip]**: start both the client and server processes simultaneously with `npm run
dev`--this takes advantage of the `npm-run-all` package which was installed.

**[Important Note]**: the server script runs with the `NODE_PATH` envar set to
the root of the server directory.  The purpose of setting this envar is to avoid
those ugly relative file resolutions ie. `require('../../../../yuck.js')`

## Final Product

![product cart component](https://github.com/team-arendelle/vinnyA3-add-to-cart/blob/master/fec-cart.jpg?raw=true) ![project running on proxy with all components](https://github.com/team-arendelle/vinnyA3-add-to-cart/blob/master/fec-sc.jpg?raw=true)


## Team Components 

  - Product Details: [https://github.com/team-arendelle/stephenjmark-product-details-summary](https://github.com/team-arendelle/stephenjmark-product-details-summary)
  - Reviews: [https://github.com/team-arendelle/RossHathaway-reviews](https://github.com/team-arendelle/RossHathaway-reviews)
