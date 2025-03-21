const Benchmark = require('benchmark');
const { isString } = require('../dist/ch.cjs.js');
const zeroEks = require('0x');
const path = require('path');
const chalk = require('chalk'); // Add chalk for colored output

const suite = new Benchmark.Suite();

suite
  .add('isString with a valid string', function () {
    isString('Hello, World!');
  })
  .add('isString with a valid string and !0 check', function () {
    isString('Hello, World!', "!0");
  })
  .add('isString with empty string', function () {
    isString("");
  })
  .add('isString with empty string and ">" comparator', function () {
    isString("", ">", 0);
  })
  .add('isString with empty string and "!empty" comparator', function () {
    isString("", "!0");
  })
  .add('isString with empty string and "!empty" comparator with third param at zero', function () {
    isString("", "!0", 0);
  })
  .on('cycle', function (event) {
    console.log(String(event.target)); // Use blue color for each test result
  })
  .on('complete', function () {
    console.log(chalk.green('Fastest is ' + this.filter('fastest').map('name'))); // Highlight the fastest test in green
    console.log(chalk.yellow('Summary of results:'));
    this.forEach((benchmark) => {
      console.log(
        `${chalk.cyan(benchmark.name)}: ${chalk.magenta(benchmark.stats.mean.toFixed(6))} seconds (mean)`
      );
      console.log('Raw stats:', benchmark.stats); // Log raw stats for debugging
    });
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