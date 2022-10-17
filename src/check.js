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
          className="border-2 border-black"
          placeholder="This is placeholder"
          row_height={20} //this is in px this is line height 
          min_row={4}
          max_row={20}
        />
      </div>
    </>
  );
};

export default Check;
