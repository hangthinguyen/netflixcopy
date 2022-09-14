import { faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoMedia.css';

export default function InfoMedia() {
    return (
        <div className='info-media-container'>
            <img
                src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQztvXkAadEs3og8_HwbGBLvIEzaEl5YPaH0PKNeYGswFS4iR3lB6Lqeb1YWhVgJNK1CCa4nyKqKsMKybUlpUayHG19DliRUcoVnCFR_8BRmcBX6hY-JTQf1jQLOdzHD1C2MpJ9WMCi0_xzKbM3JbcnCf0vfTRPe-UoqX-7Up3f-hW1essaZtA.webp?r=942"
                alt="sin of our mother"
                className='sin-of-our-mother-img'
            />
            <h3>Watch the Limited Series Now</h3>
            <p>From "Abducted in Plain Sight" director Skye Borgman, this gripping true-crime docuseries examines how once-doting mom Lori Vallow spiraled into apocalyptic ideology culminating in her kids' disappearance, multiple suspicious deaths — and murder charges.</p>
            <div className='media-container'>
                <button className='play-btn'>
                    <FontAwesomeIcon icon={faPlay} className='play-icon'/>
                    <span>Play</span>
                </button>
                <button className='more-info-btn'>
                    <FontAwesomeIcon icon={faCircleExclamation} className='more-icon'/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    )
}