const Benchmark = require('benchmark');
const { isString } = require('../dist/ch.cjs.js');
const zeroEks = require('0x');
const path = require('path');

const suite = new Benchmark.Suite();

suite
  .add('isString with a valid string', function () {
    isString('Hello, World!');
  })
  .add('isString with a number', function () {
    isString(12345);
  })
  .add('isString with null', function () {
    isString(null);
  })
  .add('isString with undefined', function () {
    isString(undefined);
  })
  .add('isString with an object', function () {
    isString({ key: 'value' });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });

// Update the flamegraph generation path to output in the performance/flamegraph/ folder
(async function generateFlamegraph() {
  try {
    const flamegraphPath = await zeroEks({
      argv: [path.join(__dirname, '../dist/ch.cjs.js')],
      workingDir: path.join(__dirname, 'flamegraph'),
      collectOnly: true,
    });
    console.log(`Flamegraph generated at: ${flamegraphPath}`);
  } catch (error) {
    console.error('Error generating flamegraph:', error);
  }
})();