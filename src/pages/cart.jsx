import React from "react";
import { graphql } from "gatsby";

import useStore from "../context/StoreContext";

import SecondaryButton from "../components/SecondaryButton";
import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductRow from "../components/ProductRow";
import ProductCard from "../components/ProductCard";


const Cart = ({ data }) => {
  const { nodes } = data.allShopifyProduct;
    const { cart, checkout } = useStore();

  return (
    <LayoutAlt>
      <Seo title="Cart" />
      <div className="page-header flex h-40">
        <h3 className="text-white m-auto text-3xl uppercase">Your cart</h3>
      </div>
      <div id="padding">
        <div className="flex flex-row justify-between w-full gap-8 border-b border-[#aaaaaa] pb-6 mb-12">
          <p className="font-light text-sm w-2/3 sm:w-1/2">Product</p>
          <p className="font-light text-sm w-1/6 sm:w-1/4 text-center">
            Quantity
          </p>
          <p className="font-light text-sm w-1/6 sm:w-1/4 text-right">Total</p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <div className="flex flex-col gap-16 sm:gap-8 text-center my-8 text-[#111111]">
            <h2 className="font-semibold text-4xl">Your cart is empty</h2>
            <a
              href="/products"
              className="bg-transparent text-[#ff5802] border border-[#ff5802] rounded-full h-10 w-fit flex justify-center items-center px-16 font-light text-xs m-auto cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-[#ff5802] hover:text-white"
            >
              Continue shopping
            </a>
          </div>
        )}

        {cart.length > 0 ? (
          <div className="flex justify-center sm:justify-end border-t border-[#aaaaaa] pt-12 mt-12">
            <SecondaryButton
              text="Checkout"
              onClick={() => window.open(checkout.webUrl)}
              disabled={cart.length === 0}
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex gap-6 flex-col sm:flex-row sm:overflow-x-scroll sm:snap-mandatory sm:snap-x pt-24">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </LayoutAlt>
  );
};

export default Cart;

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        handle
        variants {
          shopifyId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        featuredImage {
          src
          altText
          gatsbyImageData
        }
        vendor
        media {
          preview {
            image {
              src
              altText
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
