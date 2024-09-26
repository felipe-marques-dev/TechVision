import { useNavigate } from "react-router-dom";

export const useNavigateCategory = () => {
    const navigate = useNavigate()

    const goToCategory = (name: string) => {
        navigate(`/categoria/${name}`);
    };

    return { goToCategory }
}