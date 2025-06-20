import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://laughing-space-chainsaw-975wq99px9xpf7r6r-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => setTeams([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4 text-warning">Teams</h2>
          {teams && teams.results && teams.results.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Members</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.results.map(team => (
                    <tr key={team._id}>
                      <td>{team.name}</td>
                      <td>{team.members && team.members.map(m => m.username).join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">No teams found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;
