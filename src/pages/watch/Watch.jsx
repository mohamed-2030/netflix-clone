import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        <span>Home</span>
      </div>
      <video
        src="https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-Video-File-For-Testing.mp4"
        className="video"
        controls
        autoPlay
        progress
      ></video>
    </div>
  );
};

export default Watch;
