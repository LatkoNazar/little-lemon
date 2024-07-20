import "./ReserveTable.css";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function ReserveTable() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            peopleNumber: "",
            date: "",
            time: "",
            occasion: "",
            preferences: "",
            comments: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("Required!")
                .min(3, "Must be 3 or more characters!"),
            lastName: Yup.string()
                .required("Required!")
                .min(3, "Must be 3 or more characters!"),
            email: Yup.string()
                .email("Invalid email adress")
                .required("Required!"),
            phoneNumber: Yup.string()
                .required("Required!")
                .min(10, "Too short!")
                .max(10, "Too long!"),
            peopleNumber: Yup.number()
                .required("Required!")
                .positive("Must be positive number!"),
            date: Yup.date().required("Required!"),
            time: Yup.string().required("Required!"),
            occasion: Yup.string().required("Required!"),
            preferences: Yup.string().required("Required!"),
            comments: Yup.string().max(500, "Must be 500 or less characters!"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            alert("Form submitted");
            resetForm();
        },
    });

    return (
        <div className="reserve-table-field-edge">
            <section className="reserve-table-h1-field">
                <div className="text-before-reservation">
                    <h1 id="reserve-table-h1-field">Reserve Table</h1>
                    <p>
                        Let our restaurant be the stage for your culinary
                        adventure. Your seat awaits – make your reservation now
                        and indulge in unforgettable flavors.
                    </p>
                </div>
                <div id="img-tables-before-form">
                    <img src="/images/tables-reserving.png" alt="Tables" />
                </div>
            </section>

            <form className="form-reservation" onSubmit={formik.handleSubmit}>
                <div className="formField">
                    <label for="your-first-name-form-field">First name</label>
                    <input
                        className="inputField"
                        type="text"
                        id="your-first-name-form-field"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        style={
                            formik.errors.firstName &&
                            formik.touched.firstName && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error-formik">
                            {formik.errors.firstName}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-last-name-form-field">Last name</label>
                    <input
                        className="inputField"
                        type="text"
                        id="your-last-name-form-field"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        style={
                            formik.errors.lastName &&
                            formik.touched.lastName && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error-formik">
                            {formik.errors.lastName}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-email-form-field">Email</label>
                    <input
                        className="inputField"
                        type="email"
                        id="your-email-form-field"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        style={
                            formik.errors.email &&
                            formik.touched.email && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-formik">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-phone-number-form-field">
                        Phone number
                    </label>
                    <input
                        className="inputField"
                        type="text"
                        id="your-phone-number-form-field"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        style={
                            formik.errors.phoneNumber &&
                            formik.touched.phoneNumber && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div className="error-formik">
                            {formik.errors.phoneNumber}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-numberPeople-form-field">
                        Number of people
                    </label>
                    <input
                        className="inputField"
                        type="number"
                        id="your-numberPeople-form-field"
                        name="peopleNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.peopleNumber}
                        style={
                            formik.errors.peopleNumber &&
                            formik.touched.peopleNumber && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.peopleNumber &&
                    formik.errors.peopleNumber ? (
                        <div className="error-formik">
                            {formik.errors.peopleNumber}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-date-form-field">Date</label>
                    <input
                        className="inputField"
                        type="date"
                        id="your-date-form-field"
                        name="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        style={
                            formik.errors.date &&
                            formik.touched.date && {
                                border: "2px solid red",
                            }
                        }
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="error-formik">{formik.errors.date}</div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="your-time-form-field">Time</label>
                    <select
                        className="inputField"
                        id="your-time-form-field"
                        name="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        style={
                            formik.errors.time &&
                            formik.touched.time && {
                                border: "2px solid red",
                            }
                        }
                    >
                        <option value="11:00 AM">11:00</option>
                        <option value="12:00 PM">12:00</option>
                        <option value="1:00 PM">13:00</option>
                        <option value="2:00 PM">14:00</option>
                        <option value="3:00 PM">15:00</option>
                        <option value="4:00 PM">16:00</option>
                        <option value="5:00 PM">17:00</option>
                        <option value="6:00 PM">18:00</option>
                        <option value="7:00 PM">19:00</option>
                        <option value="8:00 PM">20:00</option>
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                        <div className="error-formik">{formik.errors.time}</div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        className="inputField"
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.occasion}
                        style={
                            formik.errors.occasion &&
                            formik.touched.occasion && {
                                border: "2px solid red",
                            }
                        }
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? (
                        <div className="error-formik">
                            {formik.errors.occasion}
                        </div>
                    ) : null}
                </div>
                <div className="formField">
                    <label htmlFor="preferences">Seating preferences</label>
                    <select
                        className="inputField"
                        id="preferences"
                        name="preferences"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.preferences}
                        style={
                            formik.errors.preferences &&
                            formik.touched.preferences && {
                                border: "2px solid red",
                            }
                        }
                    >
                        <option>Indoors</option>
                        <option>Outdoor (Patio)</option>
                        <option>Outdoor (Sidewalk)</option>
                    </select>
                    {formik.touched.preferences && formik.errors.preferences ? (
                        <div className="error-formik">
                            {formik.errors.preferences}
                        </div>
                    ) : null}
                </div>

                <div className="formField">
                    <label htmlFor="comments">Additional Comments</label>
                    <textarea
                        id="comments"
                        rows={8}
                        cols={40}
                        placeholder="Additional Comments"
                        name="comments"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comments}
                        style={
                            formik.errors.comments &&
                            formik.touched.comments && {
                                border: "2px solid red",
                            }
                        }
                    ></textarea>
                    {formik.touched.comments && formik.errors.comments ? (
                        <div className="error-formik">
                            {formik.errors.comments}
                        </div>
                    ) : null}
                </div>
                <p id="submissionWarning">
                    You won't be able to change your entered data. Check your
                    data before submission!!!
                </p>
                <button
                    type="submit"
                    className="formField"
                    id="submitReservation"
                >
                    Submit reservation
                </button>
            </form>
        </div>
    );
}
