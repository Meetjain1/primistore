// import { useState } from "react";
import "./App.css";
// import SinglePage from "./components/SinglePage/SinglePage";
// import { COLS, ROWS } from "./utils/constants";
// import { CHAR2CODE } from "./utils/charset";
import { Route, Routes } from "react-router";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from "./reducers/password-reducer";
import { Provider } from "react-redux";
import ListPasswords from "./components/pages/ListPasswords/ListPasswords";
import EncryptPassword from "./components/pages/EncryptPassword/EncryptPassword";
import DecryptPassword from "./components/pages/DecryptPassword/DecryptPassword";
import CreatePassword from "./components/pages/CreatePassword/CreatePassword";
import GeneratePassword from "./components/pages/GeneratePassword/GeneratePassword";

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/password" element={<CreatePassword />} />
          <Route path="/passwords" element={<ListPasswords />} />
          <Route
            path="/password/encrypt/:pass_uid"
            element={<EncryptPassword />}
          />
          <Route
            path="/password/decrypt/:pass_uid"
            element={<DecryptPassword />}
          />
          <Route path="/generate-password" element={<GeneratePassword />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;