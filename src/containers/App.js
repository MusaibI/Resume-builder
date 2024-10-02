import React from "react";
import Basic from "../components/Left/Basic";
import Right from "../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import myClasses from "./../components/Left/Left.module.css";
import logo from "../../src/assets/default.png";
import thumbn from "../../src/assets/templateA.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Header from "../components/Left/Header";
import Professional from "../components/Left/Professional";
import Education from "../components/Left/Education";
import AdditionalSkills from "../components/Left/AdditionalSkills";

function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      minWidth: 100,
      marginLeft: 30,
    },
  });

  const classes = useStyles();

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/" style={{ textAlign: "left" }}>
          <img src={logo} alt="logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h2 className={myClasses.templatesH2}>Templates</h2>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header"
          >
            The Basic
          </Button>
        </div>
        {/* Placeholder for a second template */}
        {/* <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header"
          >
            The Stylish
          </Button>
        </div> */}
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Templates />,
  },
  {
    path: "/basic",
    element: <Basic />,
    children: [
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "professional",
        element: <Professional />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "additional",
        element: <AdditionalSkills />,
      },
    ],
  }
])

function App() {
  return (
    <div className="app">
      <ResumeContextProvider>
        <RouterProvider router={router} />
        <Right />
      </ResumeContextProvider>
    </div>
  );
}

export default App;
