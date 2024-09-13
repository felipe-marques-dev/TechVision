import { useNavigate } from "react-router-dom";

export const navigateProducts = () => {
    const navigate = useNavigate()

    const goToProduct = (id: number) => {
        navigate(`/produto/${id}`);
    };

    return { goToProduct }
}