import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createApp } from "../server.js";

let fixtureDir;
let server;
let baseUrl;

before(async () => {
  fixtureDir = await mkdtemp(join(tmpdir(), "kiducode-server-test-"));
  await mkdir(join(fixtureDir, "docs"), { recursive: true });
  await writeFile(join(fixtureDir, "index.html"), "home");
  await writeFile(join(fixtureDir, "docs", "index.html"), "docs");
  await writeFile(join(fixtureDir, "404.html"), "not found");
  await writeFile(join(fixtureDir, "asset.txt"), "asset");

  server = createApp(fixtureDir).listen(0);
  await new Promise((resolveReady) => server.once("listening", resolveReady));
  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise((resolveClosed, reject) => {
    server.close((error) => error ? reject(error) : resolveClosed());
  });
  await rm(fixtureDir, { recursive: true, force: true });
});

test("serves generated index routes without a trailing slash", async () => {
  const response = await fetch(`${baseUrl}/docs`);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "docs");
});

test("redirects trailing slashes and preserves the query string", async () => {
  const response = await fetch(`${baseUrl}/docs/?topic=install`, {
    redirect: "manual",
  });
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "/docs?topic=install");
});

test("serves static assets directly", async () => {
  const response = await fetch(`${baseUrl}/asset.txt`);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "asset");
});

test("returns the generated 404 page with a 404 status", async () => {
  const response = await fetch(`${baseUrl}/missing`);
  assert.equal(response.status, 404);
  assert.equal(await response.text(), "not found");
});
