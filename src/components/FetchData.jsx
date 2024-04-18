import { useState, useEffect } from 'react';
import { ref, query, onValue, orderByKey, startAt, endBefore } from 'firebase/database';
import { db } from '../../firebase';

export const FetchData = () => {
  const [data, setData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(4);
  const [noFetchData, setNoFetchData] = useState(true);
  
  useEffect(() => {
    fetchDataFromFB();
  }, []);
  
  const fetchDataFromFB = async () => {
    const baseFetch = query(ref(db), orderByKey(), endBefore(String(currentOffset)));
    const updFetch = query(ref(db), orderByKey(), startAt(String(currentOffset)), endBefore(String(currentOffset + 4)));
    const queryRef = data.length > 0 ? updFetch : baseFetch;
    
    try {
      onValue(queryRef, (snapshot) => {
        const newData = [];
        snapshot.forEach((childSnapshot) => {
          newData.push(childSnapshot.val());
        });
        setData(newData);
        setCurrentOffset(currentOffset + 4);
        if (newData.length < 4 && data.length > 0) setNoFetchData(false);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const handleClick = () => { 
  //   setCurrentOffset(currentOffset + 4);
  // }
console.log(data);
  return (
    <div>
      {noFetchData && <button onClick={fetchDataFromFB}>Load more</button>}
    </div>
  );
};
