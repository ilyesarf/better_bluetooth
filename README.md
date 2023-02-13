It's really complicated to share files from a device to another and bluetooth is bad. This is ***better bluetooth***

## How's this better than bluetooth?
- Longer communication distances
- Faster files transmission
- More reliable
- File sharing over multiple devices simultaneously

## Running

**On docker**
```
$ docker build . -t better_bluetooth
$ docker run -it -p 3000:3000 -p 9000:9000 better_bluetooth
```

**On host**
```
$ node web.js
```

Then visit: http://localhost:3000 or http://\<local ip>\:3000

---

### This has been tested on Chrome & Chromium. If you experience any problems in any other browser, please submit an issue and i'll try to fix it. 
