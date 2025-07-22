import React, { useEffect, useState } from 'react';
import { getHistoryAPI, deleteHistoryAPI } from '../../../services/allAPI';
import { FaTrashAlt } from "react-icons/fa";

function WatchHistory() {
  const [historyData, setHistory] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch history on mount or refresh toggle
  useEffect(() => {
    const fetchHistory = async () => {
      const res = await getHistoryAPI();
      setHistory(res.data);
    };
    fetchHistory();
  }, [refresh]);

  const handleDelete = async (id) => {
    const res = await deleteHistoryAPI(id);
    if (res.status >= 200 && res.status < 300) {
      setRefresh(prev => !prev); // Trigger re-fetch
    }
  };

  return (
    <div className="container mt-4">
      <h3 className='text-danger mb-4'>Watch History</h3>
      {historyData.length > 0 ? (
        <ul className="list-group">
          {historyData.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.caption}</strong> <br />
                <small className="text-muted">{item.link}</small>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item.id)}>
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-muted'>No watch history found.</p>
      )}
    </div>
  );
}

export default WatchHistory;
