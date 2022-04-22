import { DateTime } from "luxon";
import { useState } from "react";
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import PopoverContent from "./PopoverContent";

const DatePicker: React.FC<{
  date: DateTime;
  onChange: (date: DateTime) => void;
}> = ({date, onChange}) => {
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
          selectedDate={date}
          onSelect={(date) => {
            onChange(date);
            setShowPopover(false);
          }}
        />
      }
    >
      <Form.Control
        type="text"
        value={date.toFormat("LLLL dd, yyyy")}
      />
    </OverlayTrigger>
  );
};

export default DatePicker;
