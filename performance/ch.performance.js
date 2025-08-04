const Benchmark = require('benchmark');
const { isString, isStringOfLength, isValidInteger } = require('../dist/ch.cjs.js');
const zeroEks = require('0x');
const path = require('path');
const chalk = require('chalk'); // Add chalk for colored output

const suite = new Benchmark.Suite();
const v='Hello, World!';
suite
  .add('isString with a valid string', function () {
    isString(v) && isStringOfLength(v, 2, 999);
  })
  .add('typeof with a valid string', function () {
    typeof v === "string" && v.length <= 999 && v.length >= 2;
  })
  // .add('isString with a valid string and !0 check', function () {
  //   isString(v, "!0");
  // })
  // .add('isString with empty string', function () {
  //   isString("");
  // })
  // .add('isString with empty string and ">" comparator', function () {
  //   isString("", ">", 0);
  // })
  // .add('isString with empty string and "!empty" comparator', function () {
  //   isString("", "!0");
  // })
  // .add('isString with empty string and "!empty" comparator with third param at zero', function () {
  //   isString("", "!0", 0);
  // })
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


const suite2 = new Benchmark.Suite();
const v2 = 123;
const n = Number(2);
suite2
  .add('isNumber with a valid string', function () {
    isValidInteger(v2, 2, 999, true);
  })
  .add('n === v2 with a valid string', function () {
    typeof n === v2 && v2 <= 999 && v2 >= 2;
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

// mean: The average time (in seconds) it took to execute the test. This is the most important metric for comparing performance.

// deviation: The standard deviation of the test times. A smaller deviation indicates more consistent results.

// variance: The square of the standard deviation. It measures the spread of the test times.

// moe (Margin of Error): The margin of error for the mean, calculated at a 95% confidence level. It shows the range within which the true mean likely falls.

// rme (Relative Margin of Error): The margin of error as a percentage of the mean. Lower values indicate more reliable results.

// sample: An array of individual test times. This shows the raw data used to calculate the statistics.

// How to Use:
// Focus on the mean to determine which test is fastest.
// Check the rme to ensure the results are reliable (lower is better).
// Use the deviation to see how consistent the test times are.