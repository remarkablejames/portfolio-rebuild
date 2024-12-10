"use client";
import { Gallery } from "next-gallery";
import { ImagePreviewer } from "./image-previewer";

const widths = [500, 500, 500];
const ratios = [4, 4, 4, 4];

export default function MyGallery({images}: {images: { src: string; aspect_ratio: number }[]}) {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-8">Screenshots</h1>
      <Gallery
        {...{ images, widths, ratios }}
        overlay={(i) => {
          return (
            <div
              className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
              onClick={() => console.log("clicked")}
            >
              {/* <h1>{i}</h1> */}
              <ImagePreviewer image={images[i]} />
            </div>
          );
        }}
      />
    </div>
  );
}
