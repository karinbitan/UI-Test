import { HighlightPreview } from '../HighlightPreview/HighlightPreview';
import './HighlightList.scss';

export function HighlightList({items}) {
    return (
        <section className="highlights-list">
            {items.map(item => {
                return (
                    <HighlightPreview item={item} key={item.title} />
                )
            })}
        </section>
    )
}

