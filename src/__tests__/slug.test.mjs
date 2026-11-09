import assert from "node:assert/strict";
import { test } from "node:test";

import { slugOf } from "../slug.mjs";

test("joins lower-case words with hyphens", () => {
  assert.equal(slugOf("Export Invoices, Monthly"), "export-invoices-monthly");
});

test("an empty title has an empty slug", () => {
  assert.equal(slugOf("  !! "), "");
});
