import { DateTime } from "luxon";
import { Card } from "react-bootstrap";

interface EventPreviewProps {
  date: DateTime;
  title: string;
  tagline?: string;
  organizer: string;
  url: string;
  className?: string;
}

const PreviewCard: React.FC<EventPreviewProps> = ({
  date,
  title,
  tagline,
  organizer,
  url,
  className,
}) => {
  return (
    <Card className={className} >
      <div className="d-flex py-2 h-100">
        <div
          style={{
            textAlign: "right",
            width: "6rem",
            paddingRight: "1em",
            marginLeft: "1em",
            marginRight: "1em",
            borderRight: "1px solid black",
          }}
        >
          <h1>{date.toFormat("LLL")}</h1>
          <h2>{date.toFormat("dd")}</h2>
        </div>
        <div
          style={{
            marginTop: "0.75rem",
            flexGrow: 1,
            marginRight: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 className="mb-0">{title}</h3>
            {tagline ? <div className="text-muted small">{tagline}</div> : null}
            <div className="text-muted small">by {organizer}</div>
          </div>
          <div className="text-end">
            <a className="small" href={url}>
              Details
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PreviewCard;
