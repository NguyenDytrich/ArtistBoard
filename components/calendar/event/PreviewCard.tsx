import { DateTime } from "luxon";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

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
            minWidth: "6rem",
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
            flexGrow: 1,
            marginRight: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{float: "right" }}>
              <OverlayTrigger overlay={<Tooltip>Go event page</Tooltip>}>
                <i className="bi-box-arrow-up-right"></i> 
              </OverlayTrigger>
            </div>
            <h3 className="mb-0">{title}</h3>
            {tagline ? <div className="text-muted small">{tagline}</div> : null}
            <div className="text-muted small">by {organizer}</div>
          </div>
          <Row className={tagline ? "mt-3" : ""}>
            <Col>
              <OverlayTrigger overlay={<Tooltip>Comment</Tooltip>}>
                <span><i className="bi-chat"></i> 23</span>
              </OverlayTrigger>
            </Col>
            <Col>
              <OverlayTrigger overlay={<Tooltip>Like</Tooltip>}>
                <span><i className="bi-heart"></i> 50</span>
              </OverlayTrigger>
            </Col>
            <Col>
              <OverlayTrigger overlay={<Tooltip>RSVP</Tooltip>}>
                <span><i className="bi-calendar"></i> 99+</span>
              </OverlayTrigger>
            </Col>
          </Row>

        </div>
      </div>
    </Card>
  );
};

export default PreviewCard;
