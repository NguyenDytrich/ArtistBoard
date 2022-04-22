import { useState } from "react";
import { DateTime } from "luxon";
import { Form, OverlayTrigger } from "react-bootstrap";
import PopoverContent from "./PopoverContent";

const TimePicker: React.FC<{
  time: DateTime;
  onChange: (time: DateTime) => void;
}> = ({ time, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <OverlayTrigger
      show={show}
      onToggle={setShow}
      trigger="click"
      placement="right"
      rootClose={true}
      overlay={
        <PopoverContent
          selectedKey={time.toFormat("#HH:mm")}
          onChange={(newTime) => {
            setShow(false);
            onChange(time.set({ ...newTime }));
          }}
        />
      }
    >
      <Form.Control type="text" value={time.toFormat("HH:mm")} />
    </OverlayTrigger>
  );
};

export default TimePicker;
