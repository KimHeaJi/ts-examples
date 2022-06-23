import { FC } from "react";

// primereact css
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Grid from "@molecules/Grid";
import data from "./data.json";
import { useState } from "react";

const App: FC = () => {
  const [contents, setContents] = useState(data);

  return (
    <div>
      <h2>PrimeReact DataTable</h2>
      <Grid contents={contents} setContents={setContents} />
    </div>
  );
};

export default App;
