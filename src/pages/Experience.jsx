import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'     //VerticalTimeline's  CSS
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'


function Experience()
{
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date = "2009"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}  >
          <h3 className="vertical-timeline-element-title"> English Degree PALSO </h3>
          <p> Level A1 </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date = "2012"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}  >
          <h3 className="vertical-timeline-element-title"> English Degree ESB </h3>
          <p> Level B2 </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date = "2015"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}  >
          <h3 className="vertical-timeline-element-title"> General High School, Stauroupoli, Thessaloniki </h3>
          <p> General High School Certificate </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date = "2016"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}  >
          <h3 className="vertical-timeline-element-title"> University of Aegean, Samos, Greece  </h3>
          <h4 className="vertical-timeline-element-subtitle"> Master's Degree </h4>
          <p> Information and Communication Systems Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className = "vertical-timeline-element--work"
          date = "2022"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}  >
          <h3 className="vertical-timeline-element-title"> ERP Programmer (Internship)  </h3>
          <h4 className="vertical-timeline-element-subtitle"> Eykarpia, Thessaloniki </h4>
          <p> Learn ERP customization </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date = "2022"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}  >
          <h3 className="vertical-timeline-element-title"> Master's Thesis  </h3>
          <p> Profile of Cyber Crimes in Greece and Ways to Prevent & Confront them </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience;