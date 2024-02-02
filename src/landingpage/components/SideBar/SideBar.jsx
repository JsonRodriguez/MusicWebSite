import { SideBarFooter, SideBarHeader} from './components';
import { SideBarMenus } from './components/SideBarMenus';

// eslint-disable-next-line react/prop-types
export const SideBar = ({ onClickMenuClose , isMenuOpened }) => {

    return (
        <aside className='sidebar'
            style={{
            'left': isMenuOpened
            }}
        >
            <SideBarHeader onClickMenuClose={ onClickMenuClose } />
            <SideBarMenus />
            <SideBarFooter />
        </aside>
    )
}
