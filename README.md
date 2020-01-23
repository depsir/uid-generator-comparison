# Unique id generator comparison
This repo compares three methods to generate an unique id

  - a custom function (generateId)
  - uuid (v1)
  - sha1 (sha)

## Performance comparison

To execute the test just run

    npm run start

The output shows the elapsed time for the three methods on 100000 iterations

## Bundle size comparison

Webpack is configured to generate three bundles, one for each method. Just run

    npm run build

In the dist folder, three bundles will be generated and you can just compare their size.
