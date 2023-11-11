import { useParams } from 'react-router-dom';
import useGetAllImages from '../../hooks/useGetAllImages';
import { baseURL } from '../../api/instance';
import { removeFileExtension } from '../../utils/removeFileExtension';
import LinkWithArrow from '../../components/LinkWithArrow/LinkWithArrow';
import { routes } from '../../routes/routes';
import { appData } from '../../data/appData';
import './ProjectImages.css';

function ProjectImages() {
  const { projectName } = useParams();
  const images = useGetAllImages(projectName ?? '');

  return (
    <div className="container__ProjectImages">
      <LinkWithArrow
        to={routes.Home}
        label={appData.backToHomeLinkText}
        arrowColor="var(--linkItemChainTextHoverColor)"
        className="back_home_text__ProjectImages"
        reversed
      />
      <h1 className="title__Archive">{appData.archiveTitle}</h1>
      <div className="images_container__ProjectImages">
        {images.map((img) => {
          const imageUrl = `${baseURL}${projectName}/${img.name}`;

          return (
            <a
              key={img.name}
              href={imageUrl}
              target="_blank"
              title="Open Image in New Tab"
              className="img_container__ProjectImages"
            >
              <h1 className="screenshot_title__ProjectImages">
                {removeFileExtension(img.name)}
              </h1>
              <img
                className="img__ProjectImages"
                src={img.data}
                alt="project screenshot"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectImages;
