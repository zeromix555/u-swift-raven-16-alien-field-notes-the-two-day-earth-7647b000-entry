// Alien Field Notes: The Two Day Earth Review — entry program.
// Writes one original line of plain text (at most 200 characters):
// a review of planet Earth left by an alien tourist.
// The line is a single joke — the locals pay rent to sleep on a rock
// they did not build — with a star rating and a closing punch.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Lovely planet. The locals pay rent to sleep on a rock they didn't build, then thank the rock for the privilege. Four stars - the sunsets are free, the landlords aren't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
