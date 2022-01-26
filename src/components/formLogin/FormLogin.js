import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupAction } from "../../store/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./formLogin.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.authRootReducer.isAuth);

  // if (isAuth) navigate("/");
  return (
    <div className="container vh-100 d-grid align-content-center">
      <div className="row justify-content-center ">
        <div className="col-8 col-md-4 formik">
          <Formik
            initialValues={{
              email: "challenge@alkemy.org",
              password: "react",
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

              if (!values.password) {
                errors.password = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(signupAction(values.email, values.password));
              resetForm();
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
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      className="form-control"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="form-text error">{errors.password}</div>
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
