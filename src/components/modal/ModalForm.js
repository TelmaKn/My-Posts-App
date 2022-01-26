import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./modalForm.css";
import * as postActions from "../../store/posts/PostReducer";

function ModalForm(props) {
  const dispatch = useDispatch();
  const statePost = useSelector((state) => state.postsList.data);
  return (
    <>
      <Modal
        title={props.title}
        description={props.body}
        show={props.show}
        onHide={props.onHide}
        animation={false}
        className="modalContain "
      >
        <Modal.Header closeButton />

        {props.title && !props.edit ? (
          <Modal.Body className="modal-body-details">
            <Modal.Title>{props.title}</Modal.Title>
            {props.description}
          </Modal.Body>
        ) : (
          <Formik
            initialValues={{
              title: props.title ? props.title : "",
              description: props.description ? props.description : "",
            }}
            validate={(values) => {
              let errors = {};

              if (!values.title) {
                errors.title = "Required";
              }

              if (!values.description) {
                errors.description = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              let newId = statePost.length + 1;
              let userId = 6;

              const formEdit = () => {
                dispatch(
                  postActions.create({
                    title: values.title,
                    body: values.description,
                    id: newId,
                    userId: userId,
                  })
                );
              };

              const formCreate = () => {
                dispatch(
                  postActions.update({
                    id: props.id,
                    title: values.title,
                    body: values.description,
                  })
                );

                resetForm();
              };
              !props.edit ? formEdit() : formCreate();
              props.onHide();
              resetForm();
            }}
          >
            {({ errors }) => (
              <Form>
                <Modal.Body className="modal-body-edit">
                  <Modal.Title>
                    <label htmlFor="title">Title</label>
                    <Field
                      className="form-control titleInput"
                      as="textarea"
                      name="title"
                    />
                    <ErrorMessage
                      name="title"
                      component={() => (
                        <div className="form-text error">{errors.title}</div>
                      )}
                    />
                  </Modal.Title>
                  <label htmlFor="description">Description</label>
                  <Field
                    className="form-control descriptionInput"
                    as="textarea"
                    name="description"
                  />
                  <ErrorMessage
                    name="description"
                    component={() => (
                      <div className="form-text error">
                        {errors.description}
                      </div>
                    )}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        )}
      </Modal>
    </>
  );
}

export default ModalForm;
