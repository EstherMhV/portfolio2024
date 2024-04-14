import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import ClientSkillView from "@/components/client-view/skills";

async function extractAllDatas(currentSection) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const text = await res.text();
  console.log(text);

  try {
    const data = JSON.parse(text);
    return data && data.data;
  } catch (err) {
    console.error(err);
  }
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  const skillSectionData = await extractAllDatas("skills");


  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientSkillView data={skillSectionData} />
      <ClientContactView />
    </div>
  );
}
