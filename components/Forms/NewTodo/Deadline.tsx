import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from "react";

interface UpdateFunParams {
  todo?: string;
  deadline?: string;
}

interface Props {
  updateDeadLine: (update: UpdateFunParams) => void;
}

const DeadLine: React.FC<Props> = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    props.updateDeadLine({ deadline: date.toLocaleDateString() });
  }, [date]);

  return <DatePicker selected={date} onChange={(date: any) => setDate(date)} />;
};

export default DeadLine;
