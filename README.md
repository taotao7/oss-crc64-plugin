# oss-crc64-plugin
a webassembly crc64 plugin
base on [CRC64-ECMA182.js](https://www.npmjs.com/package/crc64-ecma182.js)

 ** Please use version xxx.xxx or higher **

## how to use

```bash
npm install oss-crc64-plugin --save
```

Introduce in the entry file
```html
<script src="node_modules/oss-crc64-plugin/index.js"></script>
```

## OSS API

### put
```javascript
client.put("example",file, {
      crc64: CRC64.crc64,
});
```

### multipartUpload
```javascript
client.multipartUpload("example",file, {
  crc64: CRC64.crc64,
});
```

### get
```javascript
client.get("example",file, {
  crc64: CRC64.crc64,
});
```


## utils

### CRC64.crc64()
Receive an object that will return the value of crc64

```javascript
const crc = CRC64.crc64(file);
console.log(crc)
```


### CRC64.crc64File()
Check the crc64 value of the file

```javascript
CRC64.crc64File(file, (err, crc)=>{
  if(err) throw new Error('fail');
  console.log(crc)
})
```
