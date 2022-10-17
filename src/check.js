import React, { useState } from "react";

import TextArea from "./components/utils/form/text-area";

const Check = () => {
  const [state, setState] = useState("");
  return (
    <>
      <div>
        <TextArea
          value={state}
          onChange={(e) => setState(e.target.value)}
          className=""
          placeholder="This is placeholder"
          row_height={20}
          min_row={4}
          max_row={8}
        />
      </div>
    </>
  );
};

export default Check;
