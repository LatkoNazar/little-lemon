import "./UsersFeedbacks.css";
import Feedback from "../../components/Feedback/Feedback.js";
const Feedbacks = [
    {
        picture: "/images/FirstFeedbackPic.jpg",
        name: "Olivia",
        feedback: "This restaurant is fantastic!",
    },
    {
        picture: "/images/SecondFeedbackPic.jpg",
        name: "Emily",
        feedback: "The service was excellent!",
    },
    {
        picture: "/images/ThirdFeedbackPic.jpg",
        feedback: "The ambiance is beautiful!",
        name: "Sophia",
    },
    {
        picture: "/images/FourthFeedbackPic.jpg",
        name: "Madison",
        feedback: "The food was delicious!",
    },
    {
        picture: "/images/FifthFeedbackPic.jpg",
        name: "Arthur",
        feedback: "The prices were affordable!",
    },
];

export default function UsersFeedbacks() {
    return (
        <>
            <div className="Feedbacks-main-section">
                {Feedbacks.map((item) => (
                    <Feedback feedback={item} />
                ))}
            </div>
        </>
    );
}
