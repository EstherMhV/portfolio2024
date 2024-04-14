"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "image",
    placeholder: "Image",
    type: "text",
    label: "Image",
  },
  {
    name: "name",
    placeholder: "Nom",
    type: "text",
    label: "name",
  },
  {
    name: "level",
    placeholder: "Niveau",
    type: "number",
    label: "level",
  },
];

export default function AdminSkillView({
  formData,
  handleSaveData,
  setFormData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{item.image}</p>
                  <p>{item.name}</p>
                  <p>{item.level}</p>

                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("skill")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Ajouter Skill
        </button>
      </div>
    </div>
  );
}
