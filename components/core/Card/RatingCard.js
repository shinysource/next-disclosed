import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Card,
  StatusContainer,
  PosText,
  NegText,
  CardText,
} from "./RatingCard.module";
import Rating from "../Rating/Rating";

const RatingCard = (props) => {
  return (
    <Card>
      <div className="w-[35%]">
        <CircularProgressbar
          value={props.percent}
          text={`${props.value}/5`}
          background
          styles={buildStyles({
            backgroundColor: "rgba(22, 118, 248, 0.08)",
            textColor: "#C9C9C9",
            pathColor: "#0492C2",
            trailColor: "transparent",
          })}
        />
      </div>
      <div className="pt-9">
        <Rating value={props.value} activeColor="#0492C2"></Rating>
      </div>
      {props.pos && (
        <div className="w-full">
          <StatusContainer>
            <div className="w-1/2">
              <CardText>Positive</CardText>
              <PosText>{props.pos}</PosText>
            </div>
            <div className="w-1 bg-white h-7 mr-4"></div>
            <div className="w-1/2">
              <CardText>Negative</CardText>
              <NegText>{props.neg}</NegText>
            </div>
          </StatusContainer>
        </div>
      )}
    </Card>
  );
};

export default RatingCard;
