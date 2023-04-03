import styles from '@/styles/Home.module.css'

export const Hour = ({ index, createNewEvent, name }: any) => {

  
  return (
    <p className={styles.hour} onClick={() => createNewEvent(index)}>
      {index} Hour - {name}
    </p>
  )
}