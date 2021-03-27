import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import UserService from "../services/user.service";

const BoardModerator = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

 
  useEffect(() => {
    // UserService.getModeratorBoard().then(
    //   (response) => {
    //     setContent(response.data);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
   // );
 
  }, []);
  if (currentUser.roles[0] !=="ROLE_MODERATOR") {
    return <Redirect to="/home" />;
  } 
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>ADMIN ,oderator</h3>
      </header>
    </div>
  );
};

export default BoardModerator;
