import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export const Modal = ({ close, setEvent, startTime }: any) => {
  const [start, setStart] = useState<number|null>(startTime);
  const [end, setEnd] = useState<number|null>(null);
  const [name, setName] = useState('');

    return (
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>X</button>

        <div>
        <label htmlFor={'name'}>Name</label>
        <input id={'name'} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>

        <div>
        <label htmlFor={'start'}>Start Time</label>
        <input id={'start'} type="number" value={`${start}`} onChange={(e) => setStart(Number(e.target.value))}></input>
        </div>
        <div>
        <label htmlFor={'end'}>end Time</label>
        <input id={'end'} type="number" value={`${end}`} onChange={(e) => setEnd(Number(e.target.value))}></input>
        </div>

        <button onClick={() => setEvent(name, start, end)}>Submit</button>
      </div>
    )
}