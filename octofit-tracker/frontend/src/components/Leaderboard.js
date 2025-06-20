import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://laughing-space-chainsaw-975wq99px9xpf7r6r-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => setLeaderboard([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4 text-success">Leaderboard</h2>
          {leaderboard && leaderboard.results && leaderboard.results.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>User</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.results.map(entry => (
                    <tr key={entry._id}>
                      <td>{entry.user && entry.user.username}</td>
                      <td>{entry.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">No leaderboard data found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
