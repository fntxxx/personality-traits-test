import axios from "axios";

const API_URL =
    "https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json";

/**
 * 取得 Big Five 人格測驗資料
 */
export const fetchBigFive = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;

    return {
        // 首頁會用到
        meta: {
            name: data.name,
            description: data.description,
            traitsZh: data.traits.zh,
            traitsEn: data.traits.en,
        },

        // 問題頁會用到（10 題）
        questions: normalizeQuestions(data.problemList),

        // 結果頁會用到（5 個面向）
        results: normalizeResults(data.problemList, data.degree),
    };
};

/**
 * 把 problemList 整理成「線性題目陣列」
 * 方便 Test.jsx 用 index 控制第幾題
 */
const normalizeQuestions = (problemList) => {
    return Object.values(problemList).flatMap((trait) =>
        trait.problems.map((problem) => ({
            id: problem.id,
            category: problem.category,
            title: trait.name,
            problem: problem.problem,
            options: problem.options,
        }))
    );
};

/**
 * 整理結果頁需要的資料（5 個人格面向）
 */
const normalizeResults = (problemList, degree) => {
    return Object.entries(problemList).map(([key, trait]) => ({
        key,
        name: trait.name,
        degree,
        description: trait.description,
    }));
};