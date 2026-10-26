import { FAQ } from "../functions/_seo.js";
const order = ["ko", "en", "ja", "zh", "zh-Hant"];
const lines = [];
for (const lg of order) {
  const arr = FAQ.courses[lg];
  if (!arr) continue;
  const key = lg.includes("-") ? JSON.stringify(lg) : lg;
  lines.push("  " + key + ": [");
  for (const [q, a] of arr) lines.push("    [" + JSON.stringify(q) + ", " + JSON.stringify(a) + "],");
  lines.push("  ],");
}
process.stdout.write("const COURSES_FAQ = {\n" + lines.join("\n") + "\n};\n");
