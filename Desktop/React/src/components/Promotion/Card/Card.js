import React from "react";
import './Card.css';


const PromotionCard = ({Promotion}) => (
    <div className="promotion-card">
        <img src={Promotion.imageUrl} className="promotion-card__image"/>
        <div className="promotion-card__info">
            <h1 className="promotion-card__title">{Promotion.title}</h1>
            <span className="promotion-card__price">R$ {Promotion.price}</span>
            <footer className="promotion-card__footer">
                {Promotion.comments.length > 0 && (
                    <div className="promotion-card__comment">"{Promotion.comments[0].comment}"</div>
                )}

                <div className="promotion-card__count__comments">{Promotion.comments.length} {' '}
                    {Promotion.comments.length > 1 ? 'Comentários' : 'Comentário'} 
                </div>

                <a href={Promotion.url} target = '_blank' className="promotion-card__link">IR PARA O SITE</a>
            </footer>
        </div>
    </div>
)

export default PromotionCard;