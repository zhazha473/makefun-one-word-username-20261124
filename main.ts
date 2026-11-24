// One Word, One Username, One Reward
// ---------------------------------------
// This program answers the bounty with a single word: the entrant's own
// make.fun handle. Nothing is explained, pitched, or padded — the word
// speaks for itself, exactly as the rules ask.
//
// The handle is a doubled name: a digit, then a syllable said twice.
// It introduces itself and then says it again, which is why it sticks
// after a single glance.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HANDLE = "2zha-zha";

// Guard: the entry must be exactly one word, 1–30 characters, with no
// whitespace anywhere in it — and it must be pure ASCII, so the byte count
// always equals the character count. If that ever stops being true, fail
// loudly instead of writing a bad entry.
if (HANDLE.length < 1 || HANDLE.length > 30) {
  throw new Error(`handle must be 1-30 characters, got ${HANDLE.length}`);
}
if (!/^[\x21-\x7E]+$/.test(HANDLE)) {
  throw new Error("handle must be a single printable ASCII word, no whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, HANDLE, "utf8");
console.log(`Wrote ${HANDLE.length} characters to ${entryPath}`);
