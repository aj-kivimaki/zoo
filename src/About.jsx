import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about">
      <h2>About this Project</h2>
      <p>ZOO - Version 1.0.0</p>
      <p>This is build with ReactJS.</p>
      <Link to="/">Home</Link>
    </main>
  );
};

export default About;
