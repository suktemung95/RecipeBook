import DashboardComp from "./DashboardComp/DashboardComp.jsx";
import FavoritesComp from "./DashboardComp/FavoritesComp.jsx";
import MyRecipesComp from "./DashboardComp/MyRecipesComp.jsx";
import NewRecipeComp from "./DashboardComp/NewRecipeComp.jsx";
import ShoppingListComp from "./DashboardComp/ShoppingListComp.jsx";
import SettingsComp from "./DashboardComp/SettingsComp.jsx";
export default function MainDashboardComp({ navItems, currentBoard }) {

    const boardsComponents = {
        "Dashboard": <DashboardComp navItems={navItems} currentBoard={currentBoard} />,
        "Favorites": <FavoritesComp navItems={navItems} currentBoard={currentBoard} />,
        "My Recipes": <MyRecipesComp navItems={navItems} currentBoard={currentBoard} />,
        "New Recipe": <NewRecipeComp navItems={navItems} currentBoard={currentBoard} />,
        "Shopping List": <ShoppingListComp navItems={navItems} currentBoard={currentBoard} />,
        "Settings": <SettingsComp navItems={navItems} currentBoard={currentBoard} />
    }
    return (
        <div>
            {boardsComponents[currentBoard]}
        </div>
    )
}