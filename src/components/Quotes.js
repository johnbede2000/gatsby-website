import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, OneQuote, Text, Image, Source } from './Quotesstyle';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
require('swiper/components/pagination/pagination.scss');

SwiperCore.use([Pagination, Autoplay]);

// data
const query = graphql`
  {
    allQuotesJson {
      nodes {
        id
        source
        text
        img {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

// markup
const Quotes = () => {
  const data = useStaticQuery(query);

  const quotes = data.allQuotesJson.nodes;

  return (
    <Section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {quotes.map((quote) => {
          return (
            <SwiperSlide>
              <OneQuote key={quote.id}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  opacity="0.2"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <Text>{quote.text}</Text>
                <Image fixed={quote.img.childImageSharp.fixed} />
                <Source>— {quote.source}</Source>
              </OneQuote>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default Quotes;
