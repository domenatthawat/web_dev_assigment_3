import { useState } from "react";

export const EditID = () => {
    const [ editID, setEditID ] = useState(null);

    const updateEditID = (id) => {
        setEditID(id);
    };

  return { editID, updateEditID };
};
