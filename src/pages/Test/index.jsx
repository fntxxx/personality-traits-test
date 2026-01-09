// pages/Test/index.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestView from "../../components/TestView";

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
            navigate("/result", {
                state: answers
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
        <TestView
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