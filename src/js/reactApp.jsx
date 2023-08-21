import { createRoot } from "react-dom/client";
import * as React from "react";

import Alert from "../ts/Alert.tsx";

const App = () => {
  return (
    <div style={{ color: "green" }}>
      Hello, React App!<Alert message="success"></Alert>
    </div>
  );
};

const reactRoot = createRoot(document.querySelector("#react-root"));
if (reactRoot) {
  reactRoot.render(<App />);
} else {
  console.log("'reactRoot' not found.");
}
