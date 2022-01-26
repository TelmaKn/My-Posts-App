import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as postActions from "../../../store/posts/PostReducer";
import ModalForm from "../../modal/ModalForm";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./post.css";
import { Button } from "react-bootstrap";

const Post = (props) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const forEdit = () => setEdit(true);
  const forDetails = () => setEdit(false);

  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(postActions.deletebyId(id));
  };

  return (
    <div>
      <ModalForm
        id={props.id}
        show={show}
        onHide={handleClose}
        title={props.title}
        description={props.body}
        edit={edit}
      />
      <div className="line-color" />
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left">
            <div
              className="widget-heading"
              onClick={() => {
                handleShow();
                forDetails();
              }}
            >
              {props.title}
            </div>
          </div>
          <div className="widget-content-right">
            <Button
              onClick={() => {
                handleShow();
                forEdit();
              }}
              className="btn border-0 btn-edit"
            >
              <FaEdit />
            </Button>
            <Button className=" btn border-0 btn-delete">
              <FaTrashAlt
                onClick={() => {
                  deletePost(props.id);
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
