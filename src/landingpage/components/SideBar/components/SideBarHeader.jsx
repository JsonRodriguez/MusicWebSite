

// eslint-disable-next-line react/prop-types
export const SideBarHeader = ({ onClickMenuClose }) => {
    return (
        <>
            <div className='logo'>
            <button className='menu-btn' id='menu-close' onClick={ onClickMenuClose }>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <i className="fa-solid fa-heart-pulse"></i>
            <a href="#">Music Player</a>
            </div>       
        </>
    )
}
