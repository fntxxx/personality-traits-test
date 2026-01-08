// pages/Result/index.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function Result({ results }) {
    const navigate = useNavigate();
    const { state } = useLocation();

    if (!state) {
        navigate("/");
        return null;
    }

    const { score } = state;

    return (
        <div>
            <h2>測驗結果</h2>
            <p>總分：{score}</p>

            {/* 之後在這裡依 results + score 對應人格 */}
        </div>
    );
}