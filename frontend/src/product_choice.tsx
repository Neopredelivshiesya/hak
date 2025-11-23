import { useState } from "react";
function ProductChoice(){
  const [openSections, setOpenSections] = useState<{
              cardType: boolean;
          }>({
              cardType: true,
          });
  
  const [selected, setSelected] = useState({
          cardType: [] as string[], 
  });
      
          const toggleSection = (section: keyof typeof openSections) => {
              setOpenSections(prev => ({
              ...prev,
              [section]: !prev[section],
              }));
          };
    const handleCheckboxChange = (
        category: keyof typeof selected,
        value: string
    ) => {
        setSelected(prev => {
        const current = prev[category];
        if (current.includes(value)) {
        return { ...prev, [category]: current.filter(v => v !== value) };
        } else {
        return { ...prev, [category]: [...current, value] };
        }
        });
    };
          const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
              <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
          );
    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("cardType")}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">Продукт</h2>
            <ChevronDown isOpen={openSections.cardType} />
          </button>

          {openSections.cardType && (
            <div className="px-8 pb-8 pt-2">
              <div className="space-y-3">
                {["Дебетовая карта", "Кредитная карта"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center cursor-pointer hover:bg-gray-50 rounded-lg pl-5 -mx-4 transition"
                  >
                    <input
                      type="checkbox"
                      checked={selected.cardType.includes(type)}
                      onChange={() => handleCheckboxChange("cardType", type)}
                      className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-4 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </section>
    );
}
export default ProductChoice;