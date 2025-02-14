import React from "react";
import MainSection from "../components/sections/MainSection";
import PeopleSection from "../components/sections/PeopleSection";
import BlogSection from "../components/sections/BlogSection";
import PressSection from "../components/sections/PressSection";

const sections = [
  { id: "main", component: <MainSection /> },
  { id: "people", component: <PeopleSection /> },
  { id: "blog", component: <BlogSection /> },
  { id: "press", component: <PressSection /> },
];

const MainPage = (): React.JSX.Element => {
  return (
    <>
      {sections.map(({ id, component }) => (
        <section id={id} key={id}>
          {component}
        </section>
      ))}
    </>
  );
};

export default MainPage;
