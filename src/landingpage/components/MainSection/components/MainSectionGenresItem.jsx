import { genres } from '../data/genres';

export const MainSectionGenresItems = () => {
    return (
        <div className="items">
            {
                genres.map((gen) => {
                    return(
                        <div key={gen.key} className="item">
                            <p>{ gen.label1 }<br />{ gen.label2 }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
