// pages/Result/index.jsx
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultView from '../../components/ResultView'

const DEGREE_MAP = {
    high: "高",
    middle: "中",
    low: "低"
};

export default function Result({ results }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    if (!state) {
        navigate("/");
        return null;
    }

    const answers = state;
    const [currentIndex, setCurrentIndex] = useState(0);

    const scoreByTrait = useMemo(() => ({
        neuroticism: (answers.n1 || 0) + (answers.n2 || 0),
        extroversion: (answers.e1 || 0) + (answers.e2 || 0),
        openness: (answers.o1 || 0) + (answers.o2 || 0),
        agreeableness: (answers.a1 || 0) + (answers.a2 || 0),
        conscientiousness: (answers.c1 || 0) + (answers.c2 || 0),
    }), [answers]);

    const degreeMap = {
        high: "高",
        middle: "中",
        low: "低",
    };

    const resultsWithDegree = useMemo(() => {
        return results.map(trait => {
            const score = scoreByTrait[trait.key];
            let level = "middle";

            if (score >= trait.degree.high) level = "high";
            else if (score <= trait.degree.low) level = "low";

            return {
                ...trait,
                degreeLabel: level,
                degreeText: degreeMap[level],
                descriptionText: trait.description[level],
            };
        });
    }, [results, scoreByTrait]);

    const currentTrait = resultsWithDegree[currentIndex];

    return (
        <ResultView
            traits={resultsWithDegree}
            currentIndex={currentIndex}
            currentTrait={currentTrait}
            onChangeIndex={setCurrentIndex}
            onRestart={() => navigate("/")}
        />
    );
}