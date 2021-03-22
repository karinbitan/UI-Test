import { Component } from 'react'
import { Hero } from '../../cmps/Hero/Hero';
import { Highlights } from '../../cmps/Highlights/Highlights'
import Item1 from './../../assets/images/homepage/menu-items/menu-item1.jpg';
import Item2 from './../../assets/images/homepage/menu-items/menu-item2.jpg';
import Item3 from './../../assets/images/homepage/menu-items/menu-item3.jpg';
import EnjoyablePlaceDesktop from './../../assets/images/homepage/enjoyable-place-desktop.jpg';
import LocallySourceDesktop from './../../assets/images/homepage/locally-sourced-desktop.jpg';
import FamilyGatheringDesktop from './../../assets/images/homepage/family-gathering-desktop.jpg';

import './DineApp.scss'

export class DineApp extends Component {
    state = {
        items: [
            {
                title: 'Seared Salmon Fillet',
                desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
                imgUrl: Item1
            },
            {
                title: 'Rosemary Filet Mignon',
                desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
                imgUrl: Item2
            },
            {
                title: 'Summer Fruit Chocolate Mousse',
                desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
                imgUrl: Item3
            },
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <section className="dine-app container">
                <Hero />
                <div className="description-box box1 flex">
                    <img className="box-img" src={EnjoyablePlaceDesktop} alt="picture" />
                    <div className="description-text">
                        <h1>Enjoyable place for all the family</h1>
                        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                        a tour of the farm before your meal.
                    </p>
                    </div>
                </div>
                <div className="description-box box2 flex reverse">
                    <img className="box-img" src={LocallySourceDesktop} alt="picture" />
                    <div className="description-text">
                        <h1>The most locally sourced food</h1>
                        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
                        eating the freshest, most sustainable food.
                    </p>
                    </div>
                </div>
                <Highlights items={items} />
                <div className="description-box box3 flex">
                    <img className="box-img" src={FamilyGatheringDesktop} alt="picture" />
                    <div className="description-text">
                        <h1>Family Gathering</h1>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                        loved ones. We’ll provide a memorable experience for all.
                    </p>
                        <button className="book-table-btn">BOOK A TABLE</button>
                    </div>
                </div>
            </section>
        )
    }
}

