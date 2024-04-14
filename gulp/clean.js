import { rm } from "node:fs/promises";

export default function clean() {
  return rm(`public`, { recursive: true, force: true });
}
