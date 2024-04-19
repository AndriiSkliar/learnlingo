import { useState, useEffect } from 'react';
import { ref, query, onValue, orderByKey, startAt, endBefore } from 'firebase/database';
import { db } from '../../firebase';
import { TeachersCard } from './TeachersCard';
import { nanoid } from 'nanoid';

export const AAAAAFetchData = () => {
  const [data, setData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(4);
  const [noFetchData, setNoFetchData] = useState(true);
  const dataLength = data.length;

  useEffect(() => {
    fetchDataFromFB();
  }, []);
  
  const fetchDataFromFB = async () => {
    const baseFetch = query(ref(db), orderByKey(), endBefore(String(currentOffset)));
    const updFetch = query(ref(db), orderByKey(), startAt(String(currentOffset)), endBefore(String(currentOffset + 4)));
    const queryRef = dataLength > 0 ? updFetch : baseFetch;
    
    try {
      onValue(queryRef, (snapshot) => {
        const newData = [];
        snapshot.forEach((childSnapshot) => {
          newData.push(childSnapshot.val());
        });
        setData([...data, ...newData]);
        setCurrentOffset(dataLength + 4);

        if (newData.length < 4 && dataLength > 0) setNoFetchData(false);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {dataLength > 0 &&
        <ul>
          {data.map((card) => (
            <TeachersCard key={nanoid()} card={card}
          />))}
        </ul>}
      {noFetchData && <button onClick={fetchDataFromFB}>Load more</button>}
    </div>
  );
};
