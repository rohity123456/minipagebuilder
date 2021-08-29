import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Form, Modal } from "./components";
import ExcelExport from "./components/ExcelExport";
import { getFXMultiDataSet } from "./components/ExcelExport/multiSetData";
import { FXDATA } from "./components/ExcelExport/sampleData";
import { useStateValue } from "./context/StateProvider";
import Error from "./pages/error/error";
import Home from "./pages/home/home";

function App() {
  const [{ isModalOpen }] = useStateValue();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/a" exact>
            <ExcelExport
              data={[
                { sheetData: getFXMultiDataSet(FXDATA), sheetName: "aaaa" },
              ]}
              name={new Date().toString()}
            />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Modal render={(close) => <Form close={close} />} isOpen={isModalOpen} />
    </>
  );
}

export default App;
