import React from "react";
import "./time.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

// import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
let timelineElements = [
    {
      id: 1,
      title: "Application Submission",
      
      date: "17 August 2022",
      icon: "work"
    },
    {
      id: 2,
      title: "Test",
      
      date: "25 September 2022",
      icon: "work"
    },
    {
      id: 3,
      title: "Virtual interview",
      
      date: "1 September 2022",
      icon: "work"
    },
    {
      id: 4,
      title: "Receive Offer",
      
      date: "5 September 2022",
      icon: "school"
    }
  ];
function Time() {
    console.log(timelineElements)
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <p className="title">Timeline</p>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              style={{width:"50vw"}}
              // date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>

              <p id="description" style={{display:"none"}}>{element.description}</p>
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Time;
