import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "reactstrap";
import { timeline } from "../portfolio";

const lineColor = "#073b4c";
const work = {
  background: "#8ecae6",
  color: "#fff",
};
const education = {
  background: "#fc7b5d",
  color: "#fff",
};
const begining = {
  background: "#87baab",
  color: "#fff",
};
const timelineData = [
  {
    "className": "vertical-timeline-element--work",
    "icon": "heroicons-solid:cpu-chip",
    "title": "Full Stack Lead Developer",
    "subTitle": "ASML",
    "description": "description",
    "date": "Feb 2021 - Present",
  },
  {
    "icon": "fluent-emoji-high-contrast:test-tube",
    "title": "Software Engineer Consultant",
    "subTitle": "Capgemini Engineering",
    "description": "description",
    "date": "Sep 2021 - Jan 2021",
  },
  {
    "icon": "fluent-mdl2:coffee",
    "title": "Software Engineer",
    "subTitle": "Koffie Code",
    "description": "description",
    "date": "Jan 2020 - Aug 2020",
  },
  {
    "icon": "mdi:scooter-outline",
    "title": "Full Stack Engineer (Freelancer)",
    "subTitle": "Felyx",
    "description": "description",
    "date": "Feb 2020 - Mar 2020",
  },
  {
    "icon": "ri:building-fill",
    "title": "Full Stack Project Developer",
    "subTitle": "Microlab Eindhoven",
    "description": "description",
    "date": "Jan 2018 - Dec 2019",
  },
  {
    "icon": "material-symbols:bolt",
    "title": "Software Developer",
    "subTitle": "WonkaBroeders",
    "description": "description",
    "date": "Jun 2017 - Dec 2017",
  },
  {
    "icon": "subway:up-2",
    "title": "Freelance Software Developer",
    "subTitle": "Upwork",
    "description": "description",
    "date": "Jan 2017 - Jun 2017",
  },
  {
    "icon": "tabler:submarine",
    "title": "Developer Engineer",
    "subTitle": "Alterinfo C.A.",
    "description": "description",
    "date": "Oct 2015 - Jan 2017",
  },
  {
    "icon": "tdesign:chart-3d",
    "title": "Software Developer (Freelancer)",
    "subTitle": "Gyroprint 3D",
    "description": "description",
    "date": "Jul 2016 - Sep 2016",
  },
  {
    "icon": "icon-park-outline:clothes-sweater",
    "title": "Software Intern",
    "subTitle": "Wuelto",
    "description": "description",
    "date": "Apr 2013 - Sep 2016",
  },
  {
    "icon": "mdi:diploma",
    "title": "Masters in Electronics Engineering",
    "subTitle": "Universidad Simón Bolivar",
    "description": "description",
    "date": "Sep 2009 - Mar 2016",
    "contentStyle": education,
    "iconStyle": education,
  },
];
const Timeline = () => {
  return (
    <main>
      <section className="py-0 my-5 section">
        <Container className="text-center section section-lg">
          <h1 className="h1">{timeline.title}</h1>
          <p className="lead">{timeline.subTitle}</p>
          <Row className="my-6">
            <Col>
              <VerticalTimeline lineColor={lineColor}>
                {timelineData.map((timelineElement) => {
                  return (
                    <VerticalTimelineElement
                      className={timelineElement.className}
                      contentStyle={timelineElement.contentStyle
                        ? timelineElement.contentStyle
                        : work}
                      contentArrowStyle={{
                        borderRight: "7px solid " + lineColor,
                      }}
                      date={timelineElement.date}
                      dateClassName="timeline-color"
                      iconStyle={timelineElement.iconStyle
                        ? timelineElement.iconStyle
                        : work}
                      icon={<Icon icon={timelineElement.icon} />}
                    >
                      <h5 className="vertical-timeline-element-title">
                        {timelineElement.title}
                      </h5>
                      <h6 className="vertical-timeline-element-subtitle">
                        {timelineElement.subTitle}
                      </h6>
                      <p>{timelineElement.description}</p>
                    </VerticalTimelineElement>
                  );
                })}
                <VerticalTimelineElement
                  iconStyle={begining}
                  icon={<Icon icon="material-symbols:star" />}
                />
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Timeline;
