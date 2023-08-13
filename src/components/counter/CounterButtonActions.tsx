/* eslint-disable @typescript-eslint/no-explicit-any */
import Stack from "react-bootstrap/Stack";

type CounterButtonActionsProps = {
  onIncrement: any;
  onDecrement: any;
  onReset: any;
};

export default function CounterButtonActions({
  onIncrement,
  onDecrement,
  onReset,
}: CounterButtonActionsProps) {
  return (
    <div className="position-relative mx-0 px-0 py-3">
      <Stack direction="horizontal" gap={2} className="justify-content-center">
        <button
          type="button"
          title="Increment"
          className="btn btn-primary btn-md rounded text-white"
          onClick={onIncrement}
        >
          Increment +
        </button>
        <button
          type="button"
          title="Decrement"
          className="btn btn-primary btn-md rounded text-white"
          onClick={onDecrement}
        >
          Decrement -
        </button>
        <button
          type="button"
          title="Decrement"
          className="btn btn-danger btn-md rounded text-white"
          onClick={onReset}
        >
          Reset
        </button>
      </Stack>
    </div>
  );
}
