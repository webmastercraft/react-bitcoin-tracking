import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./styles.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CryptoTracker cryptoName="bitcoin" />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
