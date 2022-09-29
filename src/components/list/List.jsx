import ListItem from "../listItem/ListItem";
import Carousel from "react-carousel-light";
import "./list.scss";

const List = () => {
  const carouselNavBtnStyle = {
    borderRadius: "0%",
    height: "130px",
    margin: "0px",
    marginTop: "-50px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };
  return (
    <div className="list" >
      <span>Continue to watch</span>
      <div className="listItems">
        <Carousel
          wrapperStyle={{ width: "100%" }}
          navButtonScrollLength={300}
          navButtonScrollDuration={10}
          navButtonStyle={{ ...carouselNavBtnStyle }}
          easing="in-out-cube"
          navButtonIconColor="white"
          navButtonIconSize="40"
        >
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Carousel>
      </div>
    </div>
  );
};

export default List;
