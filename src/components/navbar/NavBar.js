import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalForm from "../modal/ModalForm";
import "./navbar.css";

const NavbarMenu = () => {
  const [show, setShow] = useState(false);
  const userId = useSelector((state) => state.user.data.id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="pt-3 pb-2 background">
        <Container className="px-5 ">
          <Navbar.Brand>
            <h1 className="pageName ">My Posts</h1>
          </Navbar.Brand>
          {userId && (
            <Navbar.Text>
              <Button
                className="linkNewPost"
                onClick={() => {
                  handleShow();
                }}
              >
                Create a New Post
              </Button>
            </Navbar.Text>
          )}
        </Container>
      </Navbar>
      <ModalForm show={show} onHide={handleClose} />
    </>
  );
};

export default NavbarMenu;
