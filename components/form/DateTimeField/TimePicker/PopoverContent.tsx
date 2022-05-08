import { useRef, forwardRef, useEffect, useState } from "react";
import { ListGroup, Popover } from "react-bootstrap";

interface TimePickerPopoverProps {
  selectedKey: string;
  onChange: (time: { hour: number; minute: number }) => void;
}

const PopoverContent: React.FC<TimePickerPopoverProps> = forwardRef<
  HTMLDivElement,
  TimePickerPopoverProps
>(({ onChange, selectedKey, ...props }, ref) => {
  const scrollRef = useRef<HTMLAnchorElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && scrollRef.current) {
      scrollRef.current.scrollIntoView();
      setLoaded(true);
    }
  }, [loaded]);

  const list = () => {
    const listItems = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 4; j++) {
        const time = `${i.toString().padStart(2, "0")}:${(j * 15)
          .toString()
          .padStart(2, "0")}`;
        const key = `#${time}`;
        listItems.push(
          <ListGroup.Item
            ref={selectedKey == key ? scrollRef : undefined}
            onClick={() => onChange({ hour: i, minute: j * 15 })}
            action
            href={key}
          >
            {time}
          </ListGroup.Item>
        );
      }
    }
    return listItems;
  };
  return (
    <Popover ref={ref} {...props}>
      <Popover.Body style={{ padding: "0.25em 0em", overflowY: "scroll"}}>
        <ListGroup
          activeKey={selectedKey}
          variant="flush"
          style={{ maxHeight: "10em" }}
        >
          {list()}
        </ListGroup>
      </Popover.Body>
    </Popover>
  );
});
PopoverContent.displayName = 'TimePickerPopover';

export default PopoverContent;
