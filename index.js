async function measure(f) {
    const start = Date.now()
    await f();
    const end = Date.now();
    console.log(`Finished in ${(end-start) / 1000} seconds.`);
 
}

import geoip from "geoip-lite";

// const ip = "207.97.237.229";
const ip = "103.57.220.206";

measure(async () => {
    const geo = geoip.lookup(ip);
    console.log(geo);
});

import fastgeoip from "doc999tor-fast-geoip";

measure(async () => {
    const geo = await fastgeoip.lookup(ip);
    console.log(geo);
});

