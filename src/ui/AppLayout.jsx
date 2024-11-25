import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoaderIndicator from "./LoaderIndicator";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoaderIndicator />}
      <Header />
      <main className="max-w[45rem] mx-auto overflow-auto p-8">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
