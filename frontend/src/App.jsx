import { SocketContextProvider } from "./contexts/socket/socketContextProvider";
import { AuthContextProvider } from "./contexts/user/authContextProvider";
import { AppRouter } from "./pages/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <AuthContextProvider>
        <SocketContextProvider>
          <AppRouter />
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;