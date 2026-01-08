// pages/Test/index.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Question";

export default function Test({ testData }) {
    const navigate = useNavigate();
    const questions = testData.questions;

    const defaultAnswers = questions.reduce((answersMap, question) => {
        answersMap[question.id] = 3;
        return answersMap;
    }, {});

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState(defaultAnswers);

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(i => i + 1);
        } else {
            const totalScore = Object.values(answers).reduce(
                (a, b) => a + b,
                0
            );

            navigate("/result", {
                state: {
                    score: totalScore,
                    answers
                }
            });
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(i => i - 1);
        } else {
            navigate("/");
        }
    };

    return (
        <Question
            question={questions[currentIndex]}
            index={currentIndex}
            total={questions.length}
            answer={answers[questions[currentIndex].id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
        />
    );
}