import styles from './student.module.css'

function Students() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>STUDENT LIST</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.header}>Name</th>
              <th className={styles.header}>Email</th>
              <th className={styles.header}>School ID</th>
              <th className={styles.header}>Course</th>
              <th className={styles.header}>Year Level</th>
              <th className={styles.header}>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.row}>
              <td className={styles.cell}>Emelyn Alegre</td>
              <td className={styles.cell}>EmelynAlegre@gmail.com</td>
              <td className={styles.cell}>20241047</td>
              <td className={styles.cell}>BSIT</td>
              <td className={styles.cell}>3rd Year</td>
              <td className={styles.cell}>09368088813</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.cell}>Jovet Reyes</td>
              <td className={styles.cell}>jovetreyes@gmail.com</td>
              <td className={styles.cell}>20247024</td>
              <td className={styles.cell}>BSIT</td>
              <td className={styles.cell}>3rd Year</td>
              <td className={styles.cell}>09123456789</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.cell}>Marvin Roy Anating</td>
              <td className={styles.cell}>Marvinroyanating@gmail.com</td>
              <td className={styles.cell}>20245878</td>
              <td className={styles.cell}>BSIT</td>
              <td className={styles.cell}>3rd Year</td>
              <td className={styles.cell}>09098765432</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
