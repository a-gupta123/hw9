import { test } from "node:test";
import assert from "node:assert/strict";
import { ufoCollision } from "../logic.js";

test("an overlapping UFO is a hit", () => {
  assert.equal(ufoCollision(0, [{ x: 0.5, halfLen: 0.8 }]), true);
});

test("a UFO outside its radius is a miss", () => {
  assert.equal(ufoCollision(0, [{ x: 2, halfLen: 0.8 }]), false);
});

test("a UFO to the left and outside its radius is a miss", () => {
  assert.equal(ufoCollision(0, [{ x: -2, halfLen: 0.8 }]), false);
});

test("standing exactly on the hit radius is not a hit", () => {
  // halfLen 0.85 → radius 1. Distance 1 fails the strict < check.
  assert.equal(ufoCollision(0, [{ x: 1, halfLen: 0.85 }]), false);
});

test("a missing halfLen uses a radius of 0.9", () => {
  assert.equal(ufoCollision(0, [{ x: 0.89 }]), true);
  assert.equal(ufoCollision(0, [{ x: 0.9 }]), false);
});

test("a halfLen of 0 uses that same default radius", () => {
  assert.equal(ufoCollision(0, [{ x: 0.89, halfLen: 0 }]), true);
});

test("an empty road is not a hit", () => {
  assert.equal(ufoCollision(0, []), false);
});

test("a later UFO can hit after an earlier one misses", () => {
  assert.equal(
    ufoCollision(0, [
      { x: 5, halfLen: 0.5 },
      { x: 0.1, halfLen: 0.8 },
    ]),
    true,
  );
});
