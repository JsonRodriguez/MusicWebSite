import { menus } from '../data/manuData'
import { SideBarMenuDescription } from './SideBarMenuDescription'

export const SideBarMenus = () => {
    return (
        <>
        {
            menus.map((menu) => {
                return(
                    <div key={menu.key} className="menu">
                        <h5>{ menu.title }</h5>
                        <ul>
                            <SideBarMenuDescription descriptions={ menu.descriptions } />
                        </ul>
                    </div>
                )
            })
        }
        </>
    )
}
