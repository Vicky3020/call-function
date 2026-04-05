import React, { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const UserManagementUI = () => {
  // Sample static data
  const [users, setUsers] = useState([
    // { id: '1', name: 'John Doe', email: 'john@example.com' },
    // { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    // { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
  ]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
  });
  const handleInputChange = (e) => {
    console.log("input changed");
    console.log(e.target.name);
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //  1==1 1===1 -> 1==='1'
  const addUser = (e) => {
    e.preventDefault();
    if (
      form.id.trim() === "" || form.name.trim() === "" ||  form.email.trim() === ""
    ) {
        toast.error("All fields are required!");
        return;
    }
    setUsers([...users,form]);
    toast.success("User added successfully....");
    setForm({
      id: "",
      name: "",
      email: "",
    });
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto flex gap-6">

          {/* Form - 35% width */}
          <div className="w-35% bg-white rounded-lg shadow-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add User</h2>
            <form onSubmit={addUser} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="id"
                  value={form.id}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Enter ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  value={form.name}
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  onChange={handleInputChange}
                  value={form.email}
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Enter email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 uppercase tracking-wide"
              >
                Add User
              </button>
            </form>
          </div>

          {/* Table - 65% width */}
          <div className="w-65% bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Users List</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.length > 0 ? (
                    users.map((user, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button className="text-emerald-600 hover:text-emerald-800 font-medium text-xs bg-emerald-100 px-3 py-1 rounded-full hover:bg-emerald-200 transition-all duration-200">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-800 font-medium text-xs bg-red-100 px-3 py-1 rounded-full hover:bg-red-200 transition-all duration-200">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-6 py-4 text-center text-xl text-gray-700"
                      >
                        No User
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagementUI;