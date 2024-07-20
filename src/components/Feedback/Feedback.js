import "./Feedback.css";

export default function Feedback(props) {
    function renderStars() {
        let starslist = [];
        for (var i = 0; i < props.feedback.rating; i++) {
            starslist.push(
                <img
                    className="startImg"
                    key={i}
                    src="/images/star.png"
                    alt="star"
                />
            );
        }
        return starslist;
    }

    return (
        <div className="feedback-container">
            <div className="feedbackIcon_div">
                <img
                    className="feedbackIcon"
                    src={props.feedback.picture}
                    alt="Icon"
                />
            </div>
            <div className="starsDiv">{renderStars()}</div>
            <h1 className="UsersName-Feedback">{props.feedback.name}</h1>
            <p className="FeedbackText">{props.feedback.feedback}</p>
        </div>
    );
}
