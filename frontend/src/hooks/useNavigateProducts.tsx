import { useNavigate } from "react-router-dom";

export const useNavigateProducts = () => {
    const navigate = useNavigate()

    const goToProduct = (url_name: string) => {
        navigate(`/produto/${url_name}`);
        window.location.reload();
    };

    return { goToProduct }
}