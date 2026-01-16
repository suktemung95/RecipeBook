import { supabase } from '../../supabaseClient'
import { useState } from "react"
export default function SettingsComp({ navItems, currentBoard }) {

    const [newName, setNewName] = useState("");

    // change display name
    const setDisplayName = async (newName) => {
        try {
            const { data, error } = await supabase.auth.updateUser({
                data: { display_name: newName }
            });

            if (error) {
                console.error("Error updating display name:", error.message);
            } else {
                console.log("Display name updated:", data);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div>
            <h2>
                This is the main dashboard area for board: {currentBoard}
            </h2>

            <form onSubmit={() => setDisplayName(newName)} className="d-flex flex-column bg-white mx-4 w-auto">
                <label htmlFor="displayNameInput" className="align-self-start ms-3">Change Display Name:</label>
                <input
                    onChange={(e) => setNewName(e.target.value)}
                    id='displayNameInput'
                    type="text"
                    placeholder="Change Display Name"
                    className="m-2 p-2 border border-gray-300 rounded"
                />
            </form>
        </div>
    )
}