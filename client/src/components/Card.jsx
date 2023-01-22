import React from "react";

import { download, placeholderImg } from "../assets";
import { downloadImage } from "../utils";
import { useState } from "react";

const Card = ({ _id, name, prompt, photo }) => {
  const [LoadImg, setLoadImg] = useState(placeholderImg);

  return (
    <div className="card group relative overflow-hidden rounded-xl shadow-card hover:shadow-cardhover">
      <img
        className="h-auto w-full rounded-xl object-cover"
        src={LoadImg}
        alt={prompt}
        onLoad={() => setLoadImg(photo)}
      />
      <div className="absolute bottom-0 left-0 right-0 m-2 flex max-h-[94.5%] translate-y-[150%] scale-[0.3] flex-col rounded-md bg-[#10131f]/70 p-4 transition-transform duration-300 group-hover:translate-y-0 group-hover:scale-100">
        <p className="prompt overflow-y-auto text-sm text-white">{prompt}</p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 object-cover text-xs font-bold text-white">
              {name[0]}
            </div>
            <p className="text-sm text-white">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="border-none bg-transparent outline-none"
          >
            <img
              src={download}
              alt="download"
              className="h-6 w-6 object-contain invert"
              title="Download image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
