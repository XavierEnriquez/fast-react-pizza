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
      <main className="overflow-auto px-4 pb-4 pt-8 md:px-8 md:pb-8 md:pt-12">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
