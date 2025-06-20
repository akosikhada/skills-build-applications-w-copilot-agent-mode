import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://laughing-space-chainsaw-975wq99px9xpf7r6r-8000.app.github.dev/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => setActivities([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Activities</h2>
          {activities && activities.results && activities.results.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Type</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.results.map(activity => (
                    <tr key={activity._id}>
                      <td>{activity.activity_type}</td>
                      <td>{activity.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info">No activities found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activities;
