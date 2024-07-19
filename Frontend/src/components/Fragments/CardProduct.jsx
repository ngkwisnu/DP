import React from "react";
import Button from "../Elements/Button/Button";

const CardProduct = ({ children, border, width, flex, center }) => {
  return (
    <div className={`${border} ${flex} ${center} rounded-lg ${width} h-full`}>
      {children}
    </div>
  );
};

CardProduct.Header = ({ image, w, h }) => {
  console.log(`w-${w} h-${h}`);
  return <img src={image} alt="Product" className={`w-${w} h-${h}`} />;
};

CardProduct.Body = ({ judul, sinopsis, ket }) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <h3 className="text-2xl font-medium mb-2">{judul}</h3>
      <p className="text-[13px]">{ket}</p>
      <p
        className={`text-[13px] mb-3 ${
          ket !== `Cerita Terbaru` && `h-44`
        } text-justify`}
      >
        {sinopsis}
      </p>
      <div className="mt-auto">
        <Button
          color="bg-[#B2AFE7]"
          width="w-[150px]"
          px="4"
          py="1"
          text="Detail Buku"
        />
      </div>
    </div>
  );
};

export default CardProduct;
