import "./Feedback.css";

export default function Feedback(props) {
    return (
        <div className="feedback-container">
            <div className="feedbackIcon_div">
                <img
                    className="feedbackIcon"
                    src={props.feedback.picture}
                    alt="Icon"
                />
            </div>
            <h1 className="UsersName-Feedback">{props.feedback.name}</h1>
            <p className="FeedbackText">{props.feedback.feedback}</p>
        </div>
    );
}
