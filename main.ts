// Entry: one toaster error line (67 chars, gate 1-120), deadpan error-code voice.
// The joke lands in the second sentence: the appliance asks the owner to
// lower their expectations to "warm", the lowest setting it can offer.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "E09: HEATING ELEMENT TIRED. PLEASE LOWER YOUR EXPECTATIONS TO WARM.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
chmodSync(outFile, 0o644);
