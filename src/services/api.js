// const API_BASE = "http://localhost:5000/api";

// export const loginAdmin = async (data) => {
//   const res = await fetch(`${API_BASE}/admin/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// export const createConsignment = async (data) => {
//   const res = await fetch(`${API_BASE}/consignments/create`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// export const getConsignments = async () => {
//   const res = await fetch(`${API_BASE}/consignments/all`);
//   return res.json();
// };

// export const updateConsignmentStatus = async (id, status) => {
//   const res = await fetch(
//     `http://localhost:5000/api/consignments/${id}/status`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status }),
//     }
//   );

//   return res.json();
// };

// export const updateConsignment = async (id, data) => {
//   const res = await fetch(
//     `http://localhost:5000/api/consignments/${id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   return res.json();
// };

// export const getConsignmentById = async (id) => {
//   const res = await fetch(
//     `http://localhost:5000/api/consignments/all`
//   );

//   const data = await res.json();

//   return data.consignments.find(c => c._id === id);
// };




// export const deleteConsignment = async (id) => {

//   const res = await fetch(
//     `http://localhost:5000/api/consignments/${id}`,
//     {
//       method: "DELETE"
//     }
//   );

//   return res.json();
// };






// Use environment variable automatically
const API_BASE =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";


// Admin Login
export const loginAdmin = async (data) => {

  const res = await fetch(
    `${API_BASE}/admin/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
};


// Create Consignment
export const createConsignment = async (data) => {

  const res = await fetch(
    `${API_BASE}/consignments/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
};


// Get All Consignments
export const getConsignments = async () => {

  const res = await fetch(
    `${API_BASE}/consignments/all`
  );

  return res.json();
};


// Update Status
export const updateConsignmentStatus = async (id, status) => {

  const res = await fetch(
    `${API_BASE}/consignments/${id}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  return res.json();
};


// Update Consignment
export const updateConsignment = async (id, data) => {

  const res = await fetch(
    `${API_BASE}/consignments/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res.json();
};


// Get by ID
export const getConsignmentById = async (id) => {

  const res = await fetch(
    `${API_BASE}/consignments/all`
  );

  const data = await res.json();

  return data.consignments.find(
    c => c._id === id
  );
};


// Delete Consignment
export const deleteConsignment = async (id) => {

  const res = await fetch(
    `${API_BASE}/consignments/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};
