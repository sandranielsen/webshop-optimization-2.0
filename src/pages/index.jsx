import * as React from "react";
import { graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/Layout";
import ProductSlider from "../components/ProductSlider";
import GuideCard from "../components/GuideCard";
import Hero from "../components/Hero";


import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const { nodes } = data.allShopifyProduct;
  const guides = data.allMongodbMagomadeBlogGuides.edges;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <div id="side-padding" className="mt-12 mb-6 sm:mt-24 sm:mb-24">
        <h2 className="flex text-4xl justify-center mb-16">Patterns</h2>
        <div className="flex flex-row gap-6 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x">
          {nodes?.map((product, index) => (
            <ProductSlider key={index} product={product} />
          ))}
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {guides.map((guide, index) => (
              <GuideCard key={index} guide={guide} />
          ))}
        </Slider>
      </div>
    </Layout>
  );};

export default IndexPage;


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

    allMongodbMagomadeBlogGuides {
      edges {
        node {
          id
          title
          imgUrl
          type
        }
      }
    }
  }
`;

