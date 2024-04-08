import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";


const ExperiencesPages = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, experiences } = await fetchExperiences(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/experiences/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Company</td>
            <td>Period</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience) => (
            <tr key={experience.id}>
              <td>
                <div className={styles.experience}>
                  <Image
                    src={experience.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.experienceImage}
                  />
                  {experience.title}
                </div>
              </td>
              <td>{experience.description}</td>
              <td>{experience.company}</td>
              <td>{experience.period}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/experiences/${period.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteExperience}>
                    <input type="hidden" name="id" value={period.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ExperiencesPages;
