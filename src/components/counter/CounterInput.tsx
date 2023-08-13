/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type CounterInputProps = {
  incrementAmount: number;
  setIncrementAmount: any;
  onAddValue: (values: number) => void;
};

export default function CounterInput({
  incrementAmount,
  setIncrementAmount,
  onAddValue,
}: CounterInputProps) {
  const onIncrementAmountChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIncrementAmount(e.target.value);
  };

  const onSubmitValuesHandler: (e: React.FormEvent<HTMLFormElement>) => void = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onAddValue(incrementAmount);

    setIncrementAmount(0);
  };

  return (
    <div className="position-relative mx-0 px-0 py-3">
      <Form onSubmit={onSubmitValuesHandler}>
        <InputGroup className="mb-3 col-3">
          <Form.Control
            type="text"
            placeholder="Add New Value..."
            aria-label="Add New Value..."
            aria-describedby="basic-addon2"
            className="text-white text-start fst-normal fs-4"
            style={{ height: "50px" }}
            value={incrementAmount ? incrementAmount : ""}
            onChange={onIncrementAmountChangeHandler}
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Add
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
