import { Form } from "react-bootstrap";

import { FieldHandler } from "..";

export interface ProgramFields {
  graduationYear: string;
  program: string;
}

const ProgramField: React.FC<{
  className?: string;
  fields: ProgramFields;
  onChange: FieldHandler<ProgramFields>;
}> = ({ className, fields, onChange }) => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <Form.Group className={`d-flex ${className}`}>
      <Form.Group className="w-50 me-1">
        <Form.Label>Program/Major</Form.Label>
        <Form.Select
          required
          value={fields.program}
          onChange={(event) => onChange({ program: event.target.value })}
        >
          <option value="">Program</option>
          <option value="music">Music</option>
          <option value="dance">Dance</option>
          <option value="theater">Theater</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="ms-1 w-50">
        <Form.Label>Graduation Year</Form.Label>
        <Form.Control
          required
          value={fields.graduationYear}
          onChange={(event) => onChange({ graduationYear: event.target.value })}
          type="text"
          placeholder={currentYear}
        />
      </Form.Group>
    </Form.Group>
  );
};

export default ProgramField;
