import { MainSectionGenresItems } from './MainSectionGenresItem';

export const MainSectionGenres = () => {
    return (
        <div className="genres">
            <div className="header">
                <h5>Genres</h5>
                <a href="">See all</a>
            </div>

            <MainSectionGenresItems />
        </div>
    )
}
