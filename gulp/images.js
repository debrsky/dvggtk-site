import gulp from "gulp";
import { rmSync } from "node:fs";
import sharpResponsive from "gulp-sharp-responsive";

const { src, dest } = gulp;

export default function images() {
  rmSync(`images`);
  return src([`docs/presentation/*.jpg`, `!docs/presentation/z*`], {
    base: `docs`
  })
    .pipe(
      sharpResponsive({
        formats: [
          {
            width: ({ width, height }) =>
              height < 400 ? width : Math.round((400 / height) * width),
            rename: { suffix: "@x400" }
          },
          {
            width: ({ width, height }) =>
              height < 400 ? width : Math.round((400 / height) * width),
            rename: { suffix: "@x400" },
            format: "webp"
          },
          {
            width: ({ width, height }) =>
              height < 400 ? width : Math.round((400 / height) * width),
            rename: { suffix: "@x400" },
            format: "avif"
          }
        ]
      })
    )
    .pipe(dest(`images`));
}
