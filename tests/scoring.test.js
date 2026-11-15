import { test } from "node:test";
import assert from "node:assert/strict";
import { scoreAfterMove } from "../logic.js";

test("moving backward does not lower the score", () => {
  assert.equal(scoreAfterMove(5, 4, -1), 5);
});

test("a new forward row raises the score to that row", () => {
  assert.equal(scoreAfterMove(5, 6, 1), 6);
});

test("landing on the current best row does not raise the score", () => {
  assert.equal(scoreAfterMove(5, 5, 1), 5);
});

test("a sideways hop does not raise the score", () => {
  assert.equal(scoreAfterMove(5, 9, 0), 5);
});