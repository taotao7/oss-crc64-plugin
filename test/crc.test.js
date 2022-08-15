let client;
const uploadContent = new Blob([
  Array(1024 * 1024 * 10)
    .fill("a")
    .join(""),
]);

describe("browser test", () => {
  before(() => {
    client = new OSS({});
  });

  it("put crc64 check", async () => {
    await client.put("test1", uploadContent, {
      crc64: CRC64.crc64,
    });
  });

  it("multipartUpload crc64 check", async () => {
    await client.multipartUpload("test3", uploadContent, {
      crc64: CRC64.crc64,
    });
  });

  it("get object crc64 check stream", async () => {
    await client.get("test1", { crc64: CRC64.crc64 });
  });
});
