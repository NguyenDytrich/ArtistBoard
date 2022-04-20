import { DateTime } from "luxon";
import { useState } from "react";
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import PopoverContent from "./PopoverContent";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelecteDate] = useState(DateTime.now());
  const [showPopover, setShowPopover] = useState(false);

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      show={showPopover}
      onToggle={setShowPopover}
      rootClose={true}
      overlay={
        <PopoverContent
          selectedDate={selectedDate}
          onSelect={(date) => {
            setSelecteDate(date);
            setShowPopover(false);
          }}
        />
      }
    >
      <Form.Control
        type="text"
        value={selectedDate.toFormat("LLLL dd, yyyy")}
      />
    </OverlayTrigger>
  );
};

export default DatePicker;
