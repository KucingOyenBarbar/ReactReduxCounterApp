import { Card } from "react-bootstrap";

type CounterHeadingProps = { title: string };

export default function CounterHeading({ title }: CounterHeadingProps) {
  return (
    <div className="position-relative mx-0 px-0">
      <Card.Title className="text-start text-capitalize fst-normal">
        {title}
      </Card.Title>

      <hr className="text-secondary" />
    </div>
  );
}
