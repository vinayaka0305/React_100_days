import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./components/01_Hello/Hello";
import Sports from "./components/02_static_sports/Sports";
import Food from "./components/03_static_food/Food";
import Toggle from "./components/04_toggle_text/Toggle";
import Counter from "./components/05_counter_app/Counter";
import ShoppingLIst from "./components/06_shoppingList/ShoppingLIst";
import CreateShapes from "./components/07_create_shapes/CreateShapes";
import Double from "./components/08_double_counter/Double";
import SlidShow from "./components/09_slide_show/SlidShow";
import Action from "./components/10_button_action/Action";
import "./App.css";
import List from "./components/11_coutriesList/List";
import ConditionalRender from "./components/12_rendering_list/ConditionalRender";
import Nav from "./components/13_nav/Nav";
import Split from "./components/14_splitting_component/Split";
import Rating from "./components/15_teachers_rating/Rating";
import TopperList from "./components/16_topper_list/TopperList";
import Theme from "./components/17_Dark_light/Theme";
import Boxes from "./components/18_create_box/Boxes";
import ImageResizer from "./components/19_image_sizer/ImageResizer";
import Form from "./components/20_form/Form";
import Random from "./components/21_random_user/Random";
import Keyboard from "./components/22_keyboard/Keyboard";
import Trivia from "./components/23_trivia_game/Trivia";
import Themeprovider from "./ThemeProvider/Themeprovider";
import Page from "./components/24_context_theme_toggler/Page";
import RoutersIntro from "./components/25_router/RoutersIntro";
import Timer from "./components/26_class_based/Timer";
import FnTimer from "./components/26_class_based/FnTimer";
import CounterClass from "./components/26_class_based/CounterClass";
import Fav from "./components/27_favorites/Fav";
import ClassComponent from "./components/26_class_based/ClassComponent";
import AppHome from "./components/28_login_form/AppHome";
import Apphome2 from "./components/29_authentication/Apphome2";
import ShapesHome from "./components/30_shapes/ShapesHome";
import Forms from "./components/31_marvel_dc/Forms";
import CoinsTT from "./components/31_Top20_coins/CoinsTT";
import CoinsHome from "./components/31_Top20_coins/CoinsHome";
import HomeAuth from "./components/33_Auth_Context/HomeAuth";
import LanguageHome from "./components/34_language/LanguageHome";
import MealHome from "./components/35_reaming_meals/MealHome";
import HomeForward from "./components/36_react_forward/HomeForward";
import ToolipHome from "./components/37_tooltip/ToolipHome";
import StopHome from "./components/38_stop_watch/StopHome";
import CouterReducer from "./components/39_counter_app/CouterReducer";
import HotelHome from "./components/40_Hotel_city_useReducer/HotelHome";
import UserListHome from "./components/41_users_list/UserListHome";
import ReducerLoginHome from "./components/42_UseReducer_login/ReducerLoginHome";
import MegaHome from "./components/43_use_callMegaBoost/MegaHome";
import NumHome from "./components/44_Num/NumHome";
import FactorialHome from "./components/45_factorial/FactorialHome";
import FetchHome from "./components/46_custom_hook/FetchHome";
import ToggleHome from "./components/46_custom_hook/ToggleHome";
import ExampleHome from "./components/example/ExampleHome";
import StopWatch1 from "./components/48_stop_watch/StopWatch1";
import StopWatch2 from "./components/48_stop_watch/StopWatch2";
import ToDo_Lists from "./components/49_to_do_list/ToDo_Lists";
import UseeEffect from "./components/47_hooks/UseeEffect";
import HomeC from "./components/47_hooks/HomeC";
import UseeReducer from "./components/47_hooks/useeReducer";
import UseeRef from "./components/47_hooks/UseeRef";
import UseeMemo from "./components/47_hooks/UseeMemo";
import UseeCallback from "./components/47_hooks/UseeCallback";
import Performance from "./components/50_debounce_throttle/Performance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Themeprovider> */}
      {/* <Hello/> */}
      {/* <Sports/> */}
      {/* <Food/> */}
      {/* <Toggle/> */}
      {/* <Counter/> */}
      {/* <ShoppingLIst/> */}
      {/* <CreateShapes/> */}
      {/* <Example/> */}
      {/* <Double/> */}
      {/* <SlidShow/> */}
      {/* <Action/> */}
      {/* <List/> */}
      {/* <ConditionalRender/> */}
      {/* <Nav firstLink="Home" secondLink="profile" thirdLink="About Us" /> */}
      {/* <Split/> */}
      {/* <Rating/> */}
      {/* <Example/> */}
      {/* <TopperList/> */}
      {/* <Theme/> */}
      {/* <Boxes/> */}
      {/* <ImageResizer/> */}
      {/* <Form/> */}
      {/* <Random /> */}
      {/* <Keyboard/> */}
      {/* <Trivia/> */}
      {/* <Page/> */}
    {/* <RoutersIntro/> */}
    {/* <Timer/> */}
    {/* <FnTimer/> */}
    {/* <CounterClass/> */}
    {/* <ClassComponent/> */}
    {/* <Fav/> */}
    {/* <AppHome/> */}
    {/* <Apphome2/> */}
    {/* <ShapesHome/> */}
    {/* <Example/> */}
    {/* <Forms/> */}
    {/* <CoinsTT/> */}
    {/* <CoinsHome/> */}
    {/* <HomeAuth/> */}
    {/* </Themeprovider> */}
    {/* <LanguageHome/> */}
    {/* <MealHome/> */}
    {/* <HomeForward/> */}
    {/* <ToolipHome/> */}
    {/* <StopHome/> */}
    {/* <CouterReducer/> */}
    {/* <Example/> */}
    {/* <HotelHome/> */}
    {/* <UserListHome/> */}
    {/* <ReducerLoginHome/> */}
    {/* <Example/> */}
    {/* <MegaHome/> */}
    {/* <NumHome/> */}
    {/* <FactorialHome/> */}
    {/* <FetchHome/> */}
    {/* <ToggleHome/> */}
    {/* <ExampleHome/> */}
    {/* <StopWatch1/> */}
    {/* <StopWatch2/> */}
    {/* <ToDo_Lists/> */}
    {/* <UseeEffect/> */}
    {/* <HomeC/> */}
    {/* <UseeReducer/> */}
    {/* <UseeRef/> */}
    {/* <UseeMemo/> */}
    {/* <UseeCallback/> */}
    {/* <Performance/> */}
    <ExampleHome/>
    </>
  );
}

export default App;
