import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar, Container, Button } from "react-bootstrap";
import ModalForm from "../modal/ModalForm";

const NavbarMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="pt-2 pb-3 background">
        <Container className="px-5 ">
          <Navbar.Brand>
            <Link className="linkHome " to="/">
              Post List
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            <Button
              className="linkNewPost"
              onClick={() => {
                handleShow();
              }}
            >
              Create New Post
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>
      <ModalForm show={show} onHide={handleClose} />
    </>
  );
};

export default NavbarMenu;
