// Pure game rules. No DOM and no Three.js.

// Next hop, or null when the move is blocked by the side or back boundary.
export function movementTarget(row, col, dir, halfW) {
  let dRow = 0, dCol = 0;
  if (dir === 'forward')  dRow =  1;
  if (dir === 'backward') dRow = -1;
  if (dir === 'left')     dCol = -1;
  if (dir === 'right')    dCol =  1;

  const newRow = row + dRow;
  const newCol = Math.max(-halfW, Math.min(halfW, col + dCol));

  if (dir === 'left'  && newCol === col) return null;
  if (dir === 'right' && newCol === col) return null;
  if (newRow < 0) return null;

  return { row: newRow, col: newCol, dRow };
}

// Furthest forward row reached. Sideways and backward hops do not change it.
export function scoreAfterMove(score, row, dRow) {
  if (dRow > 0 && row > score) return row;
  return score;
}

// True when the player overlaps a UFO. `ufos` is [{ x, halfLen }].
export function ufoCollision(chickenX, ufos) {
  for (const ufo of ufos) {
    const hl = (ufo.halfLen || 0.75) + 0.15;
    if (Math.abs(ufo.x - chickenX) < hl) return true;
  }
  return false;
}
