# Internet-measurement

# Internet Measurement

A Node.js script that measures download speed for a given URL: it makes 10
sequential requests and reports average request time, total downloaded size,
and effective download speed.


## Requirements

- Node.js **18+** (built-in `fetch` is required)
- Check your version:

```bash
node -v
```


## Installation

git clone <repo-url>
cd Internet-measurement


## Usage

node script.js "<URL>"


## Units

- **Time** (`#N`, `average time`) — milliseconds (ms)
- **Body size** (`#N`) — bytes
- **Total downloaded** — megabytes (MB), binary (1 MB = 1024 × 1024 bytes)
- **Speed** — megabytes per second (MB/s), binary (1 MB/s = 1 048 576 bytes/s)

The script uses 1024-based (binary) units, so "MB" means MiB.