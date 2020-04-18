import React from "react";
import moment from "moment";

function NewsCard(props) {
  const { url, title, date, img_url, source_name } = props.news;

  return (
    <a href={url} className="newsCard">
      <h2 className="newsTitle">{title}</h2>
      <img src={img_url} alt={title} className="newsImage"></img>
      <div className="newsInfo">
        {`${source_name} - ${moment(date * 1000)
          .locale("es")
          .format("DD/MM/YYYY HH:mm")}`}
      </div>
      <style jsx>{`
        .newsCard {
          height: 25em;
          background: #222;
          margin: 1em;
          font-size: 0.7rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          flex: 1 1 20em;
          border-radius: 1em;
        }

        .newsImage {
          width: auto;
          max-width: 100%;
          height: 60%;
        }

        .newsTitle {
          color: white;
          font-size: 0.9em;
          font-weight: 300;
          
          padding: 1.5em;
          display: flex;
          align-items: center;
          height: 30%;
        }

        .newsInfo {
          color: white;
          font-size: 0.8em;
          word-wrap: break-word;
          height: 10%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </a>
  );
}
export default NewsCard;
