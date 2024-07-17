const assert = require("assert");
const {
  checkWithPing,
  checkWithCurl,
  checkWithWget,
  checkWithNet,
  checkWithAxios,
  checkWithHttps,
} = require("../index");

describe("Internet Connectivity Tests", function () {
  it("should check with ping", function () {
    const result = checkWithPing();
    assert.strictEqual(typeof result, "boolean");
  });

  it("should check with curl", function () {
    const result = checkWithCurl();
    assert.strictEqual(typeof result, "boolean");
  });

  it("should check with wget", function () {
    const result = checkWithWget();
    assert.strictEqual(typeof result, "boolean");
  });

  it("should check with net module", async function () {
    const result = await checkWithNet();
    assert.strictEqual(typeof result, "boolean");
  });

  it("should check with axios module", async function () {
    const result = await checkWithAxios();
    assert.strictEqual(typeof result, "boolean");
  });

  it("should check with https module", async function () {
    const result = await checkWithHttps();
    assert.strictEqual(typeof result, "boolean");
  });
});
