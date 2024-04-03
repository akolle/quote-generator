import { useState, useEffect } from 'react';
const Fetch2 = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      {photos.map((photo) => (
        <p>{photo.text}</p>
        
      ))}
    </div>
  );
};
export default Fetch2;