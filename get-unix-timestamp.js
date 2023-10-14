#!/usr/bin/env node
const yargs = require('yargs');

const getTimestamp = () => Math.floor(new Date().getTime() / 1000);

const dateToTimestamp = (dateString) => Math.floor(new Date(dateString).getTime() / 1000);

const timestampToDate = (timestamp) => new Date(timestamp * 1000).toString();

const argv = yargs
  .option('date', {
    describe: 'Convert Date to UNIX timestamp',
    type: 'string',
  })
  .option('timestamp', {
    describe: 'Convert UNIX timestamp to Date',
    type: 'number',
  })
  .default({
    describe: 'Get UNIX timestamp',
    type: 'number'
  })
  .help()
  .argv;

if (argv.date) {
  console.log(dateToTimestamp(argv.date));
} else if (argv.timestamp) {
  console.log(timestampToDate(argv.timestamp));
} else {
  console.log(getTimestamp());
}
