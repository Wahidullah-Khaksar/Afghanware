import { FaShoppingBag } from "react-icons/fa";
import useReveal from "./hooks/useReveal";

function App() {
  const cardRef = useReveal();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="animate-fade-up text-4xl font-bold text-gray-900 flex items-center gap-3">
        <FaShoppingBag className="text-amber-600" />
        AfghanWear
      </h1>

      <div
        ref={cardRef}
        className="reveal bg-white rounded-xl shadow-md p-6 max-w-sm text-center
                   transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <p className="text-gray-700">Frontend setup works.</p>
        <button
          className="mt-4 px-5 py-2 bg-amber-600 text-white rounded-lg
                     transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
