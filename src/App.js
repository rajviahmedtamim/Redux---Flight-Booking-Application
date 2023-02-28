import { Provider } from "react-redux";
import "./App.css";
import DisplaySection from "./components/DisplaySection/DisplaySection";
import Header from "./components/Header/Header";
import SelectionSection from "./components/SelectionSection/SelectionSection";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <SelectionSection />

        <DisplaySection />
      </section>
    </Provider>
  );
}

export default App;
