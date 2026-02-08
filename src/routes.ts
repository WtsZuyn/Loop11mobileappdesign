import { createBrowserRouter } from "react-router";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { InterestsScreen } from "./screens/InterestsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { FashionLoopScreen } from "./screens/FashionLoopScreen";
import { CoffeeLoopScreen } from "./screens/CoffeeLoopScreen";
import { CommunityLoopScreen } from "./screens/CommunityLoopScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { ShopScreen } from "./screens/ShopScreen";
import { ProductListScreen } from "./screens/ProductListScreen";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { CartScreen } from "./screens/CartScreen";
import { CheckoutScreen } from "./screens/CheckoutScreen";
import { EventsScreen } from "./screens/EventsScreen";
import { EventDetailScreen } from "./screens/EventDetailScreen";
import { EventRegisterScreen } from "./screens/EventRegisterScreen";
import { EventSuccessScreen } from "./screens/EventSuccessScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomeScreen,
  },
  {
    path: "/interests",
    Component: InterestsScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/fashion",
    Component: FashionLoopScreen,
  },
  {
    path: "/coffee",
    Component: CoffeeLoopScreen,
  },
  {
    path: "/community",
    Component: CommunityLoopScreen,
  },
  {
    path: "/about",
    Component: AboutScreen,
  },
  {
    path: "/shop",
    Component: ShopScreen,
  },
  {
    path: "/products",
    Component: ProductListScreen,
  },
  {
    path: "/product/:id",
    Component: ProductDetailScreen,
  },
  {
    path: "/cart",
    Component: CartScreen,
  },
  {
    path: "/checkout",
    Component: CheckoutScreen,
  },
  {
    path: "/events",
    Component: EventsScreen,
  },
  {
    path: "/event/:id",
    Component: EventDetailScreen,
  },
  {
    path: "/event/:id/register",
    Component: EventRegisterScreen,
  },
  {
    path: "/event/:id/success",
    Component: EventSuccessScreen,
  },
]);