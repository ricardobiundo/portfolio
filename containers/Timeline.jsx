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
    "description": "I'm helping ASML by modernizing and improving its testing tool set and workflow. To do so, I coach and lead a team of 8 developers with the goal to qualify the product software. I develop tools and web applications used to verify the software before its integration, automation of tests, visualization, polluter search, etc. This is done with Django, python, Kubernetes, Jenkins, Grafana, etc.",
    "date": "Feb 2021 - Present",
  },
  {
    "icon": "fluent-emoji-high-contrast:test-tube",
    "title": "Software Engineer Consultant",
    "subTitle": "Capgemini Engineering",
    "description": "Worked as software embedded engineer focused on C++ and python development working in the integration of event-driven software using cocotec and pipelines via gitlab.Worked as software embedded engineer focused on C++ and python development working in the integration of event-driven software using cocotec and pipelines via gitlab.",
    "date": "Sep 2021 - Jan 2021",
  },
  {
    "icon": "fluent-mdl2:coffee",
    "title": "Software Engineer",
    "subTitle": "Koffie Code",
    "description": "I worked as a software engineer freelancer in web development (full stack), embed systems and electronic engineering projects.", 
    "date": "Jan 2020 - Aug 2020",
  },
  {
    "icon": "mdi:scooter-outline",
    "title": "Full Stack Engineer (Freelancer)",
    "subTitle": "Felyx",
    "description": "Worked per contract as a fullstack developer creating an in house system used to migrate from fleetbird, simplifying the workflow, smartphone support and enabling the team to expand with features nonexistent in the previous system.",
    "date": "Feb 2020 - Mar 2020",
  },
  {
    "icon": "ri:building-fill",
    "title": "Full Stack Project Developer",
    "subTitle": "Microlab Eindhoven",
    "description": "Worked at Microlab, a vibrant co-working space in Strijp-S. I worke towards the development of smart buildings, integrating different technologies, designing and developing IOT devices that are customer oriented.",
    "date": "Jan 2018 - Dec 2019",
  },
  {
    "icon": "material-symbols:bolt",
    "title": "Software Developer",
    "subTitle": "WonkaBroeders",
    "description": "Software development and integration of Magento and Odoo to enchance the company e-commerce.",
    "date": "Jun 2017 - Dec 2017",
  },
  {
    "icon": "subway:up-2",
    "title": "Freelance Software Developer",
    "subTitle": "Upwork",
    "description": "Worked in a React.js frontend development for a golang backend in a real state web app project.",
    "date": "Jan 2017 - Jun 2017",
  },
  {
    "icon": "tabler:submarine",
    "title": "Developer Engineer",
    "subTitle": "Alterinfo C.A.",
    "description": "Worked as intern in this e-commerce start-up as front end web developer. There, I had the opportunity to put in practice my knowledge in different web technologies and Linux operative systems.",
    "date": "Oct 2015 - Jan 2017",
  },
  {
    "icon": "tdesign:chart-3d",
    "title": "Software Developer (Freelancer)",
    "subTitle": "Gyroprint 3D",
    "description": "Modernized the control systems of the generators and charging process of asubmarine model U209. Producted and deployed a survey system for an insurance company.",
    "date": "Jul 2016 - Sep 2016",
  },
  {
    "icon": "icon-park-outline:clothes-sweater",
    "title": "Software Intern",
    "subTitle": "Wuelto",
    "description": "Independent projects related to web development in php, html, mysql, ajax, js and codeigniter.",
    "date": "Apr 2013 - Sep 2016",
  },
  {
    "icon": "mdi:diploma",
    "title": "Masters in Electronics Engineering",
    "subTitle": "Universidad Simón Bolivar",
    "description": "Graduated with honors.",
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
