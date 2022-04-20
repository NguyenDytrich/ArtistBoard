import { forwardRef, useState } from "react";
import { Button, Col, Popover, Row, Table } from "react-bootstrap";
import { DateTime } from "luxon";

import styles from "../../../styles/scss/DatePicker.module.scss";

interface PopoverContentProps {
  selectedDate: DateTime;
  onSelect: (date: DateTime) => void;
}

const PopoverContent: React.FC<PopoverContentProps> = forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(({ onSelect, selectedDate, ...props }, ref) => {
  const [viewDate, setViewDate] = useState(DateTime.now());

  // Render a table of dates including empty cells
  const dates = () => {
    const newDate = viewDate.set({ day: 1 });
    const calendar: JSX.Element[][] = [];
    let wk: JSX.Element[] = [];
    for (let day = 1; day <= viewDate.daysInMonth; day++) {
      if (day == 1 && newDate.get("weekday") != 7) {
        const firstDay = newDate.get("weekday");
        for (let i = 0; i < firstDay; i++) wk.push(<td />);
      }

      wk.push(
        <td>
          <div
            className={
              day == selectedDate.get("day") &&
              viewDate.get("month") == selectedDate.get("month")
                ? `${styles.cell} ${styles.interactive} ${styles.selected}`
                : `${styles.cell} ${styles.interactive} ${styles.day}`
            }
            onClick={() => {
              const newDate = DateTime.now().set({
                day: day,
                month: viewDate.get("month"),
                year: viewDate.get("year"),
              });
              onSelect(newDate);
            }}
          >
            {day}
          </div>
        </td>
      );

      // Last iteration
      if (day == viewDate.daysInMonth) {
        for (let i = wk.length; i < 7; i++) wk.push(<td />);
      }

      if (wk.length == 7) {
        calendar.push(wk);
        wk = [];
      }
    }
    while (calendar[-1]?.length < 7) {
      calendar[-1].push(<td />);
    }
    return calendar;
  };

  return (
    <Popover ref={ref} {...props}>
      <Popover.Header className="text-center">Date</Popover.Header>
      <Popover.Body>
        <Col className="d-flex justify-content-between align-items-baseline">
          <Button
            size="sm"
            variant="link"
            onClick={() => setViewDate(viewDate.minus({ month: 1 }))}
          >
            {"<<"}
          </Button>
          <span>
            {viewDate
              .setLocale("en-US")
              .toLocaleString({ month: "long", year: "numeric" })}
          </span>
          <Button
            size="sm"
            variant="link"
            onClick={() => setViewDate(viewDate.plus({ month: 1 }))}
          >
            {">>"}
          </Button>
        </Col>
        <Table>
          <thead>
            <tr>
              <th className={styles.cell}>S</th>
              <th className={styles.cell}>M</th>
              <th className={styles.cell}>T</th>
              <th className={styles.cell}>W</th>
              <th className={styles.cell}>T</th>
              <th className={styles.cell}>F</th>
              <th className={styles.cell}>S</th>
            </tr>
            {dates().map((v) => (
              <tr>{v}</tr>
            ))}
          </thead>
        </Table>
      </Popover.Body>
    </Popover>
  );
});

export default PopoverContent;
