import { useState } from "react";
function Task10() {
  const [rooms, setRooms] = useState([
    { id: 1, room: "101", capacity: 3, occupied: 2 },
    { id: 2, room: "102", capacity: 2, occupied: 2 },
    { id: 3, room: "103", capacity: 4, occupied: 1 }
  ]);

  const [requests, setRequests] = useState([
    { id: 1, name: "Rahul", roomId: 1, status: "Pending" },
    { id: 2, name: "Priya", roomId: 2, status: "Pending" },
    { id: 3, name: "Arjun", roomId: 3, status: "Pending" }
  ]);

  const [filter, setFilter] = useState("All");

//   ===========================
//         Approve Requests
//   ===========================

  function approveRequest(requestId) {
    const request = requests.find(item => item.id === requestId);
        
    const updatedRooms = rooms.map(room => {
      if (room.id === request.roomId) {
        if(room.occupied>=room.capacity){
            alert("Room Full!");
            return {...room};
        }
        else{
            return {...room,occupied:room.occupied+=1};
        }
      }
      return room;
    });
    setRooms(updatedRooms);


    const updatedRequests = requests.map(item => {
      if (item.id === requestId) {
        if(item.status!=="Pending"){
            alert("Already Processed")
            return {...item,
              status:item.status==="Accepted"?"Accepted":"Rejected"
            };
        }
        return { ...item, status: "Accepted" };
      }
      return item;
    });

    setRequests(updatedRequests);
  }

  //   ===========================
//         Rejected Requests
//   ===========================

  function rejectRequest(requestId) {
    const updatedRequests = requests.map(item => {
      if (item.id === requestId) {
        if(item.status!=="Pending"){
            alert("Already Proccessed")
            return {...item,
              status:item.status==="Accepted"?"Accepted":"Rejected"
            };;
        }
        return { ...item, status: "Rejected"};
      }
      return item;
    });

    setRequests(updatedRequests);
  }



  const filteredRequests = requests.filter(request => {
    return filter === "All" || request.status === filter;
  });

  const totalAvailableBeds = rooms.reduce((total, room) => {
    return total += room.capacity;
  }, 0);

  const totalOccupiedBeds = rooms.reduce((total, room) => {
    return total += room.occupied;
  }, 0);


  const pendingCount = requests.filter(
    request => request.status === "Pending"
  ).length;

  return (
    <div>
      <h2>Hostel Dashboard</h2>

      <h3>Available Beds: {totalAvailableBeds-totalOccupiedBeds}</h3>
      <h3>Pending Requests: {pendingCount}</h3>

      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>

      {filteredRequests.length>0?filteredRequests.map(request => (
        <div key={request.id}>
          <p>{request.name}</p>
          <p>{request.status}</p>
          <button onClick={() => approveRequest(request.id)}>Accept</button>
          <button onClick={() => rejectRequest(request.id)}>Reject</button>
        </div>
      )):<h3>No Bookings Found</h3>}
    </div>
  );
}

export default Task10;