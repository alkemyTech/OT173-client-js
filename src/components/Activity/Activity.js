import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { get } from '../../services/apiService';

const Activity = () => {
  const { id } = useParams();
  console.log('activity id', id);

  useEffect(() => {
    const fetchData = async () => {
      const test = await get(`/activities/${id}`);
    };
  }, []);

  return (
    <section>
      <h1>Activity</h1>
    </section>
  );
};

export default Activity;
