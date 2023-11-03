import { appData } from '../../data/appData';
import useSetDocumentTitle from '../../hooks/useSetDocumentTitle';
import './NotFound.css';

function NotFound() {
  useSetDocumentTitle(appData.docTitleNotFound);
  return (
    <div className="container__NotFound">
      <span className="number__NotFound">{appData.numberNotFound}</span>
      <div className="divider__NotFound" />
      <span className="text__NotFound">{appData.textNotFound}</span>
    </div>
  );
}

export default NotFound;
