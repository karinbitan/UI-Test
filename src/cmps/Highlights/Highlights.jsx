
import { HighlightList } from '../HighlightList/HighlightList';
import './Highlights.scss';

export function Highlights({ items }) {
    return (
        <section className="highlights-menu">
            <div className="highlights-container flex">
                <div className="description">
                    <h1>A few highlights from our menu</h1>
                    <p>
                        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.
                    </p>
                </div>
                <HighlightList items={items} />
            </div>
        </section>
    )
}

