const About = () => {
  return (
    <main className="page about">
      <div className="container">
        <div className="about-project">
          <h2>About this Project</h2>
          <p>ZOO - Version 1.0</p>
          <p>This project is done with ReactJS.</p>
        </div>
        <h3 className="list-title">Things I learned about ReactJS</h3>
        <div>
          <ul className="about-list">
            <li>JSX Syntax</li>
            <li>How to handle events</li>
            <li>Use of key and list</li>
            <li>Spread operator</li>
            <li>Conditional rendering</li>
            <li>Passing data, props</li>
            <li>useState(), useParams(), useNavigate(), useLocation()</li>
            <li>Routing, v.6</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
