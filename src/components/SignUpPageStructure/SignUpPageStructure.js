import "./SignUpPageStructure.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SugnUpPageStructure() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            equalPasswords: false,
        },
        onSubmit(values, { resetForm }) {
            console.log(values);
            alert("Signed up!");
            resetForm();
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Required!")
                .min(3, "Username is too short!"),
            password: Yup.string()
                .required("Required!")
                .min(8, "At least 8 characters!"),
            confirmPassword: Yup.string()
                .required("Required!")
                .oneOf([Yup.ref("password")], "Passwords do not match!"),
            email: Yup.string().required("Required!").email("Invalid email!"),
        }),
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    function eyeToglerPassword() {
        setPasswordVisible(!passwordVisible);
    }

    function eyeToglerConfirmPassword() {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    return (
        <div className="SignUpPageStructure">
            <div id="SignUpFormDiv">
                <h1 id="SignUpH1Header">Sign Up</h1>
                <form id="SignUpForm" onSubmit={formik.handleSubmit}>
                    <div className="SignUpPageField">
                        <label htmlFor="loginUsernameField">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="loginUsernameField"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                        {formik.errors.username && formik.touched.username ? (
                            <div className="error-formik">
                                {formik.errors.username}
                            </div>
                        ) : null}
                    </div>
                    <div className="SignUpPageField">
                        <label htmlFor="loginEmailField">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="loginEmailField"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="error-formik">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="SignUpPageField">
                        <label htmlFor="loginPasswordField">Password</label>
                        <div className="passwordWrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                id="loginPasswordField"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <img
                                onClick={eyeToglerPassword}
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
                    <div className="SignUpPageField">
                        <label htmlFor="SignUpConfirmPasswordField">
                            Confirm password
                        </label>
                        <div className="passwordWrapper">
                            <input
                                type={
                                    confirmPasswordVisible ? "text" : "password"
                                }
                                name="confirmPassword"
                                id="SignUpConfirmPasswordField"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                            <img
                                onClick={eyeToglerConfirmPassword}
                                id="eyeConfirmPassword"
                                src="images/eye.png"
                                alt="eye"
                            />
                        </div>
                        {formik.errors.confirmPassword &&
                        formik.touched.confirmPassword ? (
                            <div className="error-formik">
                                {formik.errors.confirmPassword}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <button
                            id="SignUpButton"
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
                            Sign Up
                        </button>
                    </div>
                </form>
                <p>
                    Do you have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
