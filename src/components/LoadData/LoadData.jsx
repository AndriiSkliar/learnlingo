import { useState, useEffect } from 'react';
import { ref, query, onValue, orderByKey, startAt, endBefore } from 'firebase/database';
import { db } from '../../../firebase';
import { TeachersCard } from '../TeachersCard/TeachersCard';
import { nanoid } from 'nanoid';
import css from './LoadData.module.css';

export const LoadData = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(4);
  const [noMoreData, setNoMoreData] = useState(true);
  const dataLength = loadedData.length;
  const limit = 4;
  
  useEffect(() => {
    loadDataFromFB();
  }, []);
  
  const loadDataFromFB = async () => {
    const baseFetch = query(ref(db), orderByKey(), endBefore(String(currentOffset)));
    const updFetch = query(ref(db), orderByKey(), startAt(String(currentOffset)), endBefore(String(currentOffset + limit)));
    const queryRef = dataLength > 0 ? updFetch : baseFetch;
    
    try {
      onValue(queryRef, (snapshot) => {
        const newData = [];
        snapshot.forEach((childSnapshot) => {
          newData.push(childSnapshot.val());
        });
        setLoadedData([...loadedData, ...newData]);
        setCurrentOffset(dataLength + limit);

        if (newData.length < limit && dataLength > 0) setNoMoreData(false);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {dataLength > 0 &&
        <ul className={css.cardsList}>
          {loadedData.map((card) => (
            <li className={css.cardsItem} key={nanoid()}>
              <TeachersCard card={card}/>
            </li>
          ))}
        </ul>}
      {noMoreData && <button onClick={loadDataFromFB}>Load more</button>}
    </>
  );
};