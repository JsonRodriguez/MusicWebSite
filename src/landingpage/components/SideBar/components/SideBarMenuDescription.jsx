

// eslint-disable-next-line react/prop-types
export const SideBarMenuDescription = ({ descriptions }) => {
    return (
        <>
        {
            // eslint-disable-next-line react/prop-types
            descriptions.map((des) => {
                return(
                    <li key={des.key}>
                        <i className={des.icon}></i>
                        <a href="#">{des.label}</a>
                    </li>
                )
            })
        }
        </>
    )
}
