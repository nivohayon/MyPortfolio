import LinkWithArrow from '../../components/LinkWithArrow/LinkWithArrow';
import { appData } from '../../data/appData';
import { routes } from '../../routes/routes';
import './Archive.css';

function Archive() {
  return (
    <div className="container__Archive">
      <LinkWithArrow
        to={routes.Home}
        label={appData.backToHomeLinkText}
        reversed
      />
    </div>
  );
}

export default Archive;
