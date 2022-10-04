import './AccountInfo.css';

export default function AccountInfo({pFontLink, pFont, pFontName}) {
    return (
        <div className='account-function-container'>
            <a href={pFontLink} className='account-function'>
                {pFont}
                {pFontName}
            </a>
        </div>
    )
}