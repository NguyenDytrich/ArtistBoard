import { DateTime, Interval } from "luxon";
import { useMemo, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

const DateTimeField: React.FC = () => {
  const [startDate, setStartDate] = useState(
    DateTime.now().set({ hour: 8, minute: 0})
  );
  const [endDate, setEndDate] = useState(
    DateTime.now().set({ hour: 9, minute: 0})
  );

  // TODO: better validation
  const interval = useMemo(
    () => Interval.fromDateTimes(startDate, endDate),
    [startDate, endDate]
  );

  const onDateChange = (newDate: DateTime) => {
      setStartDate(newDate.set({hour: startDate.hour, minute: startDate.minute }));
      setEndDate(newDate.set({hour: endDate.hour, minute: endDate.minute }));
  };

  return (
    <>
      <InputGroup className="flex-nowrap">
        <Form.Group className="flex-grow-1 me-1">
          <Form.Label>Date</Form.Label>
          <DatePicker date={startDate} onChange={onDateChange} />
        </Form.Group>
        <Form.Group className="w-25 mx-1">
          <Form.Label>Start</Form.Label>
          <TimePicker time={startDate} onChange={setStartDate} />
        </Form.Group>
        <Form.Group className="w-25 ms-1">
          <Form.Label>End</Form.Label>
          <TimePicker time={endDate} onChange={setEndDate} />
        </Form.Group>
      </InputGroup>
      <Form.Text>
        {!interval.isValid ? "Start time cannot be after end time" : ""}
      </Form.Text>
    </>
  );
};

export default DateTimeField;
