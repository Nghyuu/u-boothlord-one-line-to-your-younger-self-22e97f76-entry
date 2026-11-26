// One line to my younger self. Writes exactly that line plus one
// trailing newline to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Kid, the night you hide the report card in the freezer, remember: the teacher who finds it is the one who teaches you to say your own name proud.";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
