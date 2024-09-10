import { AppRoutes } from "./Routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <AppRoutes />
    );
}

export default App