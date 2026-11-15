import { test } from "node:test";
import assert from "node:assert/strict";
import { movementTarget } from "../logic.js";

const halfW = 8;

test("a forward hop moves one row ahead", () => {
  assert.deepEqual(movementTarget(2, 1, "forward", halfW), {
    row: 3,
    col: 1,
    dRow: 1,
  });
});

test("left and right hops move one column inside the fences", () => {
  assert.deepEqual(movementTarget(3, 0, "left", halfW), {
    row: 3,
    col: -1,
    dRow: 0,
  });
  assert.deepEqual(movementTarget(3, 0, "right", halfW), {
    row: 3,
    col: 1,
    dRow: 0,
  });
});

test("the left fence blocks a hop past column -halfW", () => {
  assert.equal(movementTarget(3, -halfW, "left", halfW), null);
});

test("the right fence blocks a hop past column halfW", () => {
  assert.equal(movementTarget(3, halfW, "right", halfW), null);
});

test("the back fence blocks a hop behind the start row", () => {
  assert.equal(movementTarget(0, 0, "backward", halfW), null);
});

test("a backward hop is allowed once the player is past the start", () => {
  assert.deepEqual(movementTarget(4, 2, "backward", halfW), {
    row: 3,
    col: 2,
    dRow: -1,
  });
});

test("an unknown direction does not cross the back fence", () => {
  assert.deepEqual(movementTarget(0, 1, "jump", halfW), {
    row: 0,
    col: 1,
    dRow: 0,
  });
});
