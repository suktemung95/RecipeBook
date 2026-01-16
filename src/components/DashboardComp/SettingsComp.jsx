import { UserAuth } from "../../context/AuthContext";
import { supabase } from "../../supabaseClient";
import { useState } from "react";
export default function SettingsComp({ navItems, currentBoard }) {
  const [newName, setNewName] = useState("");
  const { signOut } = UserAuth();

  // log out
  const handleLogOut = async (e) => {
    // do later
  };
  // change display name
  const handleChangeName = async (e) => {
    setNewName(newName.trim());

    if (!newName) return;

    e.preventDefault();
    console.log("trying to change display name");

    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { display_name: newName },
      });

      if (error) {
        console.error("Error updating display name:", error.message);
      } else {
        console.log("Display name updated:", data);
        setNewName("");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div>
      <h2>This is the main dashboard area for board: {currentBoard}</h2>

      <form
        onSubmit={(e) => handleChangeName(e)}
        className="d-flex flex-column bg-white mx-4 w-auto"
      >
        <label htmlFor="displayNameInput" className="align-self-start ms-3">
          Change Display Name:
        </label>
        <input
          onChange={(e) => setNewName(e.target.value)}
          id="displayNameInput"
          type="text"
          value={newName}
          placeholder="Change Display Name"
          className="m-2 p-2 border border-gray-300 rounded"
        />
      </form>

      <button className="bg-danger p-3" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
