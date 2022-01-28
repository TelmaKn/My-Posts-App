import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUser } from "../../store/user/userReducer";
import { getUserPosts } from "../../store/posts/PostReducer";
import "./formLogin.css";

const LoginForm = () => {
  const [userData, setUserData] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.data.id);

  const onSubmit = async (values) => {
    await dispatch(getUser(values));
  };

  useEffect(() => {
    userId && dispatch(getUserPosts(userId)) && setUserData(true);
  }, [userId, dispatch]);

  useEffect(() => {
    userData && navigate("/");
  }, [userData, navigate]);

  return (
    <div className="container vh-100 d-grid ">
      <div className="row justify-content-center ">
        <div className="col-8 col-md-4 formik">
          <Formik
            initialValues={{
              email: "example@email.com",
              username: "Username",
            }}
            validate={(values) => {
              let errors = {};

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.username) {
                errors.username = "Required";
              }

              return errors;
            }}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ errors }) => (
              <Form className="d-grid ">
                <div className="inputs ">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <Field type="email" className="form-control" name="email" />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="form-text error">{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputusername1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <Field
                      type="username"
                      className="form-control"
                      name="username"
                    />
                    <ErrorMessage
                      name="username"
                      component={() => (
                        <div className="form-text error">{errors.username}</div>
                      )}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
