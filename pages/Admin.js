import AdminPage from "../components/Admin";
import { Fragment, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import React from "react";
import MySurveys from "../components/MySurveys";

export default function Admin() {
  const [pages, setPages] = useState([]);
  const [newSurvey, setNewSurvey] = useState(false);
  const [mySurveys, setMySurveys] = useState(true);
  const [title, setTitleName] = useState("");
  const [maxTimeToFinishPage, setTimePage] = useState("");
  const [maxTimeToFinish, setTimeFinish] = useState("");
  const [surveyPw, setSurveyPw] = useState("");

  const addPage = () => {
    setPages((pages) => [...pages, { elements: [] }]);
  };

  useEffect(() => {
    console.log(pages);
  }, [pages]);

  const deletePage = (index) => {
    const updatedPages = pages.filter((page, i) => {
      return index != i;
    });
    setPages(updatedPages);
  };

  const add = () => {
    if (newSurvey) {
      return (
        <Fragment>
          <DndProvider backend={HTML5Backend}>
            <Sidebar setPages={setPages} />
            <AdminPage
              addPage={addPage}
              pages={pages}
              deletePage={deletePage}
              setPages={setPages}
            />
          </DndProvider>
          <SidebarRight
            setPages={setPages}
            addPage={addPage}
            pages={pages}
            setMySurveys={setMySurveys}
            setNewSurvey={setNewSurvey}
            newSurvey={newSurvey}
            mySurveys={mySurveys}
            title={title}
            setTitleName={setTitleName}
            maxTimeToFinishPage={maxTimeToFinishPage}
            setTimePage={setTimePage}
            maxTimeToFinish={maxTimeToFinish}
            setTimeFinish={setTimeFinish}
            surveyPw={surveyPw}
            setSurveyPw={setSurveyPw}
          />
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      {mySurveys && (
        <MySurveys
          pages={pages}
          setPages={setPages}
          setMySurveys={setMySurveys}
          setNewSurvey={setNewSurvey}
          title={title}
          setTitleName={setTitleName}
          maxTimeToFinishPage={maxTimeToFinishPage}
          setTimePage={setTimePage}
          maxTimeToFinish={maxTimeToFinish}
          setTimeFinish={setTimeFinish}
          surveyPw={surveyPw}
          setSurveyPw={setSurveyPw}
        />
      )}
      {add()}
    </Fragment>
  );
}
