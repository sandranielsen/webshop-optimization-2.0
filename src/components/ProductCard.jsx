import React from 'react'
import { navigate } from "gatsby-link";
import useStore from "../context/StoreContext";
import {
  PlusIcon
} from "@heroicons/react/24/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



const ProductCard = ({ product }) => {
  const { addVariantToCart } = useStore();
  const image = getImage(product.featuredImage.gatsbyImageData);


    return (
      <div className="grid justify-center items-center w-full sm:w-80 top-0 gap-4 cursor-pointer relative">
        <button
          onClick={() => addVariantToCart(product, 1)}
          aria-label="Add Product"
          className="absolute top-4 right-4 bg-transparent border w-10 h-10 rounded-full z-10 text-white flex justify-center items-center hover:ease-in-out hover:duration-300 hover:bg-white hover:text-[#111111]"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
        <div
          role="button"
          tabIndex={0}
          aria-label="Product"
          className="w-80 h-[26rem]"
          onClick={() => navigate(`/products/${product.handle}`)}
          onKeyDown={() => navigate(`/products/${product.handle}`)}
        >
          <GatsbyImage
            image={image}
            layout="constrained"
            className="w-80 top-0 object-cover m-0 z-8"
            width={150}
            height={150}
            alt={product.title}
            loading="lazy"
          />

          <div className="absolute flex justify-between flex-row py-4 px-0 w-80 text-[#111111]">
            <h6 className="font-semibold text-base m-0 w-32 leading-8">
              {product.title}
            </h6>
            <div className="relative flex flex-col text-right">
              <p className="font-light text-base m-0 pb-2">
                {product.priceRangeV2.maxVariantPrice.amount} DKK
              </p>
              <p className="font-light text-base m-0">{product.vendor}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductCard