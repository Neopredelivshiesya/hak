import BankChoice from "./bank_choice";
import ProductChoice from "./product_choice";
import CriteriaChoice from "./criteria_choice";


function App() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 text-center">
                    AI Assistant for banking
                </h1>
            </header>
            <main className="w-full max-w-lg">
            <ProductChoice/>
            <BankChoice/>
            <CriteriaChoice/>
            <div className="flex justify-center pt-6 p-2">
                <button className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl flex hover:bg-blue-700 transform hover:scale-105 transition shadow-xl">
      Сравнить условия
    </button>
            </div>
            </main>
        </div>
    );
}

export default App;
