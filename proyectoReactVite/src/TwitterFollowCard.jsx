import { useState } from 'react';

function TwitterFollowCard({ userName, name, isFollowing }) {
    const [following, setFollowing] = useState(isFollowing); // Cambiamos el nombre del estado a "following"
   
    const text = following ? 'Siguiendo' : 'Seguir';
    const buttonClassName = following 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setFollowing(!following);
    }   
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' src={`https://unavatar.io/${userName}`} alt="foto avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button> 
            </aside>
        </article>
    );
}

export default TwitterFollowCard;