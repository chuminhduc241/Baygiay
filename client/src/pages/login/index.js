import { Button } from "antd";
import popup from "components/common/Popup/index";
import { LOCAL_STORAGE } from "constants/localstorage";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "redux/authSlice";
import { AuthServices } from "services/auth-service";
import * as Yup from "yup";
import InputField from "../register/InputField";
import "./style.scss";

const Login = () => {
  const user = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
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
      localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, result.accesstoken);
      // const res = await authServices.refreshToken();
      // console.log({ result, res });
      localStorage.setItem(LOCAL_STORAGE.REFESH_TOKEN, result.accesstoken);
      dispatch(loginSuccess());
      popup("Đăng nhập", "Đăng nhập thành công", "success");
      history.push("/");
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
