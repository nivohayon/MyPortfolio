import { appData } from '../../data/appData';
import './ComingSoon.css';

function ComingSoon() {
  return (
    <div className="container__ComingSoon">
      <span className="text__ComingSoon">{appData.textComingSoon}</span>
    </div>
  );
}

export default ComingSoon;
