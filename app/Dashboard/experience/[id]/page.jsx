
import styles from "@/app/ui/dashboard/experiences/singleExperience/singleExperince.module.css";
import Image from "next/image";

const UpdateExperiencePage = async ({ params }) => {
  const { id } = params;
  const experience = await fetchExperience(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/companyLogo.png" alt="" fill />
        </div>
        {experience.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateExperience} className={styles.form}>
          <input type="hidden" name="id" value={experience.id} />

          <label>Title</label>
          <input type="text" name="title" placeholder={experience.title} />

          <label>Description</label>
          <input type="number" name="description" placeholder={experience.price} />

          <label>Company</label>
          <input type="number" name="company" placeholder={experience.stock} />

          <label>Period</label>
          <input
            type="text"
            name="period"
            placeholder={experience.period|| "period"}
          />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateExperiencePage;
