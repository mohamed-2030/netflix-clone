import {
  faPlay,
  faPlus,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./listItem.scss";

const ListItem = () => {
  const [isHoverd, setIsHoverd] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      {!isHoverd && (
        <img
          className="media"
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          alt=""
        />
      )}
      {isHoverd && <video src={trailer} loop className="media" autoPlay />}
      <div className="itemInfo">
        <div className="itemIcons">
          <FontAwesomeIcon icon={faPlay} className="icon" />
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <FontAwesomeIcon icon={faThumbsDown} className="icon" />
        </div>
        <div className="infoMovie">
          <span>1 hour 19 mins</span>
          <span className="limite">+18</span>
          <span>2017</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quaerat
          laborum quibusdam earum optio exercitationem voluptates
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
