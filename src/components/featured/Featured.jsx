import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="feautred">
      <img
        alt="yesss"
        // src="https://img.freepik.com/premium-photo/retro-film-reel-burn-background_271825-14.jpg?w=1380"
        src="https://img.freepik.com/free-photo/rows-red-seats-theater_53876-64710.jpg?w=1060&t=st=1664414030~exp=1664414630~hmac=95e0d2784f2522b21ea3badda974c96ce6fab884a413101ed9f44dc401328e2b"
      />
      <div className="featured-movie-info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque
          beatae nisi maxime autem, porro, laborum sequi temporibus delectus
          quam deleniti alias sapiente asperiores aut voluptate dolore,
          architecto vero id.
        </div>
        <div className="info-buttons">
          <button className="play">
            <FontAwesomeIcon icon={faPlay} className="icon" />
            <span>Play</span>
          </button>
          <button className="info">
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
