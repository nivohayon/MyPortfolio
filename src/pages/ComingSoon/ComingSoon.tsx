import { appData } from '../../data/appData';
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle';
import './ComingSoon.css';

function ComingSoon() {
  useSetDocumentTitle(appData.textComingSoon);
  return (
    <div className="container__ComingSoon">
      <span className="text__ComingSoon">{appData.textComingSoon}</span>
    </div>
  );
}

export default ComingSoon;
