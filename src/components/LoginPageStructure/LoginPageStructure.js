import "./LoginPageStructure.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginPageStructure() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit(values, { resetForm }) {
            console.log(values);
            alert("Logged in!");
            resetForm();
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Required!")
                .min(3, "Username is too short!"),
            password: Yup.string()
                .required("Required!")
                .min(8, "At least 8 characters!"),
        }),
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    function eyeTogler() {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className="LoginPageStructure">
            <div id="LoginFormDiv">
                <h1 id="loginH1Header">Login</h1>
                <form id="LoginForm" onSubmit={formik.handleSubmit}>
                    <div className="loginPageField">
                        <label htmlFor="loginUsernameField">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="loginUsernameField"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            style={
                                formik.errors.username &&
                                formik.touched.username && {
                                    border: "2px solid red",
                                }
                            }
                        />
                        {formik.errors.username && formik.touched.username ? (
                            <div className="error-formik">
                                {formik.errors.username}
                            </div>
                        ) : null}
                    </div>
                    <div className="loginPageField">
                        <label htmlFor="loginPasswordField">Password</label>
                        <div className="passwordWrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                id="loginPasswordField"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                style={
                                    formik.errors.password &&
                                    formik.touched.password && {
                                        border: "2px solid red",
                                    }
                                }
                            />
                            <img
                                onClick={eyeTogler}
                                id="eyePassword"
                                src="images/eye.png"
                                alt="eye"
                            />
                        </div>
                        {formik.errors.password && formik.touched.password ? (
                            <div className="error-formik">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <button
                            id="loginButton"
                            disabled={!formik.isValid}
                            style={{
                                backgroundColor:
                                    formik.isValid && formik.dirty
                                        ? "#f4ce14"
                                        : "gray",
                                color:
                                    formik.isValid && formik.dirty
                                        ? "#495e57"
                                        : "black",
                            }}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p>
                    Don't have an account? <Link to="/sign-up">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
