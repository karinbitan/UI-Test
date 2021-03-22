import './HighlightPreview.scss';

export function HighlightPreview({item}) {

    return (
        <div className="highlight-preview flex" key={item.title}>
            <img className="item-img" src={item.imgUrl} alt="item-pic" />
            <div className="item-description">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}

