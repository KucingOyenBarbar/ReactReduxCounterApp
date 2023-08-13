/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import CounterHeading from "../../components/counter/CounterHeading";
import CounterButtonActions from "../../components/counter/CounterButtonActions";
import CounterDisplayValue from "../../components/counter/CounterDisplayValue";
import CounterInput from "../../components/counter/CounterInput";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const onIncrementHandler = () => dispatch(increment());
  const onDecrementHandler = () => dispatch(decrement());
  const onResetHandler = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const onAddValueHandler = (values: number): void => {
    const value = Number(values) || 0;
    dispatch(incrementByAmount(value));
  };

  return (
    <Row className="justify-content-start g-2 py-3">
      <Col>
        <Row className="justify-content-center align-content-center g-2">
          <Col lg={5}>
            <Card body className="rounded" data-bs-theme="dark">
              <CounterHeading title="Count Today" />
              <CounterDisplayValue count={count} />
              <CounterButtonActions
                onIncrement={onIncrementHandler}
                onDecrement={onDecrementHandler}
                onReset={onResetHandler}
              />

              <CounterInput
                incrementAmount={incrementAmount}
                setIncrementAmount={setIncrementAmount}
                onAddValue={onAddValueHandler}
              />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
