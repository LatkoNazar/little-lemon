import "./UsersFeedbacks.css";
import Feedback from "../../components/Feedback/Feedback.js";

// Max number of characters in feedback is 180

const Feedbacks = [
    {
        picture: "/images/FirstFeedbackPic.jpg",
        rating: 4,
        name: "Olivia",
        feedback:
            "This restaurant is fantastic! The dishes are well-prepared and flavorful. I was impressed with the presentation and the variety of options on the menu. Definitely worth a visit!",
    },
    {
        picture: "/images/SecondFeedbackPic.jpg",
        rating: 5,
        name: "Emily",
        feedback:
            "The service was excellent! The staff were friendly, attentive, and made sure all our needs were met. I appreciated the quick service and the professional manner in which everything was handled.",
    },
    {
        picture: "/images/ThirdFeedbackPic.jpg",
        rating: 5,
        name: "Sophia",
        feedback:
            "The ambiance is beautiful! The decor is elegant and cozy, creating a perfect setting for a lovely evening. The lighting and music added to the overall delightful atmosphere. It's a great place to relax and enjoy a meal.",
    },
    {
        picture: "/images/FourthFeedbackPic.jpg",
        rating: 4,
        name: "Madison",
        feedback:
            "The food was delicious! Each dish was packed with flavor and cooked to perfection. I particularly enjoyed the chef's special, which was a delightful surprise. The portions were generous and the ingredients fresh.",
    },
    {
        picture: "/images/FifthFeedbackPic.jpg",
        rating: 4,
        name: "Arthur",
        feedback:
            "The prices were affordable! I was pleased to find that the quality of the food and service did not come with a hefty price tag. It's a great value for the money, and I will definitely be coming back!",
    },
];

export default function UsersFeedbacks() {
    return (
        <div id="Feedbacks-main-div-section">
            <h1 className="WhatPeopleSay">What people say about us!</h1>
            <div className="Feedbacks-main-section">
                {Feedbacks.map((item) => (
                    <Feedback feedback={item} />
                ))}
            </div>
        </div>
    );
}
