export default function DashboardNavBar({ navItems, currentBoard, setCurrentBoard }) {

    return (
        <div className='bg-light d-flex flex-column ms-3 mt-2'
            style={{ width: "20%" }}>
            {/*list of navigation titles */}
            {/* {console.log(currentBoard)} */}

            {navItems.map((item, index) => (
                currentBoard === item ? (
                    <button key={index}
                        className="p-3 m-1 bg-primary rounded text-light">
                        {item}
                    </button>
                ) : (
                    <button key={index}
                        className="p-3 m-1 bg-light rounded text-primary"
                        onClick={() => setCurrentBoard(item)}>
                        {item}
                    </button>
                )))}
        </div>

    )
}