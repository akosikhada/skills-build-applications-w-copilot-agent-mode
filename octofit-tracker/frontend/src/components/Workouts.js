import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://laughing-space-chainsaw-975wq99px9xpf7r6r-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => setWorkouts([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4 text-secondary">Workouts</h2>
          {workouts && workouts.results && workouts.results.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.results.map(workout => (
                    <tr key={workout._id}>
                      <td>{workout.name}</td>
                      <td>{workout.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">No workouts found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Workouts;
