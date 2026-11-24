const url = process.argv[2];

if(!url){
    console.error('usage: node script url');
    process.exit(1);
}

const main = async () => {
    const N = 10;
    let totalTime = 0;
    let totalBytes = 0;

    for (let i = 0; i < N; i++) {
    const start = performance.now();

    const res = await fetch(url, {
      headers: { 'Cache-Control': 'no-cache' },
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const buf = await res.arrayBuffer();
    const elapsed = performance.now() - start;

    totalTime += elapsed;
    totalBytes += buf.byteLength;

    console.log(`#${i + 1}: ${elapsed.toFixed(0)} ms, ${buf.byteLength} bytes`);
  }

  const avgMs = totalTime / N;
  const speedBps = totalBytes / (totalTime / 1000);
  const speedMBs = speedBps / (1024 * 1024);

  console.log('---');
  console.log(`average time: ${avgMs.toFixed(0)} ms`);
  console.log(`total downloaded: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`speed: ${speedMBs.toFixed(2)} MB/s`);
}

main().catch((e) => {
  console.error('Error:', e.message);
  process.exit(1);
});