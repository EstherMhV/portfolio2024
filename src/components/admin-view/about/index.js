"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
];

export default function AdminAboutView({formData, setFormData , handleSaveData}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={()=> handleSaveData('about')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}
