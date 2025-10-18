import styles from './Student.module.css'

function Students() {
  return (
   <div>
      <h2 className={styles.title}>STUDENT</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Name</th>
            <th className={styles.header}>email</th>
            <th className={styles.header}>school_id</th>
            <th className={styles.header}>course</th>
            <th className={styles.header}>year_level</th>
             <th className={styles.header}>contact</th>
             
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.cell}>Emelyn Alegre</td>
            <td className={styles.cell}>EmelynAlegre@gmail.com</td>
            <td className={styles.cell}>20241047</td>
            <td className={styles.cell}>BSIT</td>
            <td className={styles.cell}>3RD YEAR</td>
            <td className={styles.cell}>09368088813</td>
          </tr>
          <tr>
            <td className={styles.cell}>Bob Smith</td>
            <td className={styles.cell}>bs002</td>
            <td className={styles.cell}>444-555-6666</td>
            <td className={styles.cell}>bob@example.com</td>
            <td className={styles.cell}>Regular client</td>
          </tr>
          <tr>
            <td className={styles.cell}>Carol White</td>
            <td className={styles.cell}>cw003</td>
            <td className={styles.cell}>777-888-9999</td>
            <td className={styles.cell}>carol@example.com</td>
            <td className={styles.cell}>VIP account</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Students
