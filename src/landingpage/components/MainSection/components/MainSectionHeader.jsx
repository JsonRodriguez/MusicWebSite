
// eslint-disable-next-line react/prop-types
export const MainSectionHeader = ({ onClickMenuOpen }) => {
    return (
        <header>
            <div className="nav-links">
                <button className='menu-btn' id='menu-open' onClick={ onClickMenuOpen }>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="">Music</a>
                <a href="">Live</a>
                <a href="">Podcast</a>
            </div>

            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Type here to search' />
            </div>
        </header>
    )
}
