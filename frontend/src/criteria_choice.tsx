import { useState } from "react";

function CriteriaChoice(){
    const [openSections, setOpenSections] = useState<{
        criteria: boolean;
    }>({
        criteria: true,
    });

    const [selected, setSelected] = useState({
        criteria: [] as string[], 
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
    return(
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("criteria")}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">Критерии для сравнения</h2>
            <ChevronDown isOpen={openSections.criteria} />
          </button>

          {openSections.criteria && (
            <div className="px-8 pb-8 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-1">
                {[
                  "Стоимость обслуживания",
                  "СМС-уведомления",
                  "Снятие наличных в других банках",
                  "Переводы по реквизитам в другие банки",
                  "Процент на остаток",
                  "Кредитный лимит",
                  "Процентные ставки",  
                  "Льготный период",
                  "Первоначальный взнос",
                  "Программа лояльности"
                ].map((criterion) => (
                  <label key={criterion} className="flex items-center cursor-pointer hover:bg-gray-50 rounded-lg p-1 transition">
                    <input
                      type="checkbox"
                      checked={selected.criteria.includes(criterion)}
                      onChange={() => handleCheckboxChange("criteria", criterion)}
                      className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-4 text-gray-700">{criterion}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </section>
    );
}
export default CriteriaChoice;