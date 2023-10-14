# get-unix-timestamp
NPM package to create a UNIX timestamp.

**How to use**

Install the package and run it:
```bash
npm install get-unix-timestamp

get-unix-timestamp
```

Or use npx:

```bash
npx get-unix-timestamp
```

**Optional parameters**

*--date*: Convert a specific date to a UNIX timestamp:
```bash
npx get-unix-timestamp --date="2023-10-14"
> 1697241600
npx get-unix-timestamp --date="2023-10-14t00:00:00"
> 1697238000
```

*--timestamp*: Convert a UNIX timestamp to Date:
```bash
npx get-unix-timestamp --timestamp=1697151600
```
