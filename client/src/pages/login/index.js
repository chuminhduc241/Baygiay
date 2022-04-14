import { Button } from "antd";
import popup from "components/common/Popup/index";
import { ROUTES } from "constants/routes";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { AuthServices } from "services/auth-service";
import * as Yup from "yup";
import InputField from "../register/InputField";
import "./style.scss";

const Login = () => {
  const user = {
    email: "",
    password: "",
  };
  const history = useHistory();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    password: Yup.string().required("Mật khẩu không được để trống"),
  });
  const authServices = new AuthServices();
  const handleRegister = async (values) => {
    try {
      console.log(values);
      const result = await authServices.login(values);
      console.log(result);
      popup("Đăng nhập", "Đăng nhập thành công", "success");
    } catch (err) {
      console.log(err.response.data);
      popup("Đăng nhập", `${err.response.data.msg}`, "error");
    }
  };

  return (
    <div className="login">
      <Formik
        initialValues={user}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        {(formikProps) => {
          return (
            <Form>
              <h2>SIGN UP</h2>
              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Enter your username ..."
              />
              <FastField
                name="password"
                component={InputField}
                label="Mật khẩu"
                placeholder="Enter your Name ..."
              />

              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
