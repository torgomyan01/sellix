"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";

interface IMainTemplate {
  children: React.ReactNode;
}

function MainTemplate({ children }: IMainTemplate) {
  return (
    <Provider store={store}>
      <main className="h-full">{children}</main>
    </Provider>
  );
}

export default MainTemplate;
