import Button from "@/components/common/Button";
import { useCount } from "@/context/CountContext";

const CounterAppPage = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter App</h1>
      <p className="text-6xl font-bold text-gray-700 my-8">{count}</p>
      <div className="flex gap-6">
        <Button
          buttonLabel="Increment"
          onClick={increment}
          buttonBackgroundColor="green"
        />
        <Button
          buttonLabel="Decrement"
          onClick={decrement}
          buttonBackgroundColor="red"
        />
      </div>
    </div>
  );
};

export default CounterAppPage;