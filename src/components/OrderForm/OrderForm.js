import "./OrderForm.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { HidenContext } from "../../components/UserOrder/UserOrder.js";
import { OrderContext } from "../../App";
export default function OrderForm(props) {
    const { setHiden } = useContext(HidenContext);
    const { setUsersOrder } = useContext(OrderContext);

    function handleXClick() {
        setHiden(true);
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            adress: "",
            email: "",
        },
        onSubmit(values, { resetForm }) {
            console.log(values);
            alert("Order Placed!");
            resetForm();
            setHiden(true);
            setUsersOrder([]);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required!")
                .min(3, "Username is too short!"),
            adress: Yup.string()
                .required("Required!")
                .min(5, "At least 5 characters!"),
            email: Yup.string().required("Required!").email("Invalid email!"),
        }),
    });

    return (
        <div id="OrderForm-main-box" style={props.styling}>
            <img
                id="ClosingX"
                onClick={handleXClick}
                src="/images/RedX.png"
                alt="Close"
            />
            <div id="OrderForm-main-field">
                <form onSubmit={formik.handleSubmit}>
                    <div className="Order-formField">
                        <label for="order-your-first-name-form-field">
                            Your name
                        </label>
                        <input
                            className="order-inputField"
                            type="text"
                            id="order-your-first-name-form-field"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error-formik">
                                {formik.errors.name}
                            </div>
                        ) : null}
                    </div>

                    <div className="Order-formField">
                        <label htmlFor="order-your-email-form-field">
                            Email
                        </label>
                        <input
                            className="order-inputField"
                            type="email"
                            name="email"
                            id="order-your-email-form-field"
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

                    <div className="Order-formField">
                        <label for="order-your-adress-form-field">Adress</label>
                        <input
                            className="order-inputField"
                            type="text"
                            id="order-your-adress-form-field"
                            name="adress"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.adress}
                        />
                        {formik.touched.adress && formik.errors.adress ? (
                            <div className="error-formik">
                                {formik.errors.adress}
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
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
