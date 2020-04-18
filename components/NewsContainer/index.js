import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";

const NewsContainer = ({ data }) => {
  const [index, setIndex] = useState(9);
  const visible = data.slice(0, index);

  useEffect(() => {
    setIndex(9);
  }, [data]);

  const showMore = () => {
    setIndex(index + 9);
  };

  return (
    <InfiniteScroll
      next={showMore}
      loader={Spinner}
      hasMore={visible.length < data.length}
      endMessage={
        <div className="endMessage">
          Estas al dia, leiste todas las noticias!
        </div>
      }
      className="newsContainer"
      dataLength={visible}
    >
      {visible.map((news) => (
        <NewsCard key={news.news_id} news={news}></NewsCard>
      ))}
      <style jsx>{`
        .endMessage {
          color: var(--color-acento);
          width: 100%;
          font-size: 2em;
          display: flex;
          justify-content: center;
          margin: 1em;
          font-weight: bold;
        }
      `}</style>
      <style jsx global>{`
        .newsContainer {
          width: 100%;
          padding: 1em 7em;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          height: 100%;
        }
      `}</style>
    </InfiniteScroll>
  );
};

export default NewsContainer;
