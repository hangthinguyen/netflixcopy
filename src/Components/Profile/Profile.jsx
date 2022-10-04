import './Profile.css';

export default function Profile({pLink, pImage, pName}) {
    return (
        <div className='accounts-container'>
            <a href={pLink} className='account-name-container'>
                <img src={pImage} alt='' className='account'/>
                {pName}
            </a>
        </div>
    )
}