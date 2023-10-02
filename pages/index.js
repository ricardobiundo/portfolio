import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Timeline = dynamic(() => import("../containers/Timeline"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import Contact from "../components/ContactUs.jsx";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
