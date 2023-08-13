type CounterDisplayValueProps = { count: number };

export default function CounterDisplayValue({
  count,
}: CounterDisplayValueProps) {
  return (
    <div className="position-relative mx-0 px-0 py-3">
      <div className="d-flex justify-content-center g-2">
        <h1 className="text-start text-danger fst-bold">{count}</h1>
      </div>
    </div>
  );
}
