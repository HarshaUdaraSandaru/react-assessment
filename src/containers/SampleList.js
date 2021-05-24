import React, { useState } from "react";
import { FieldListItem } from "../component";

const SampleList = () => {
  const [fields, setFields] = useState([]);

  const displayFields = () => {
    setFields((oldFields) => [
      ...oldFields,
      <FieldListItem key={oldFields.length + 1} />,
    ]);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-success" onClick={() => displayFields()}>
          Add Field
        </button>
      </div>

      <div className="overflow-auto">{fields}</div>
    </div>
  );
};

export default SampleList;
