import { useRoutes } from "react-router-dom";
import { appRoutes } from "./components/common/app-routers";

function App() {
  const routesElement = useRoutes(appRoutes);
  return (
    <main>{routesElement}</main>
  );
}

export default App;
