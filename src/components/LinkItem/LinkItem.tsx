import { useNavigate } from 'react-router-dom';
import LinkChainSVG from '../../assets/icons/link_chain.svg?react';
import { routes } from '../../routes/routes';
import './LinkItem.css';

type LinkItemProps = {
  title: string;
  url: string;
};

const LinkItem = ({ title, url }: LinkItemProps) => {
  const navigate = useNavigate();

  const handleOpenLink = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Fixes a problem when clicking on a link that navigates to coming soon screen it would navigate and click on the main card body.
    if (url) {
      window.open(url, '_blank');
    } else {
      navigate(routes.ComingSoon);
    }
  };

  return (
    <div onClick={handleOpenLink} className="link_item_container__LinkItem">
      <LinkChainSVG className="link_chain__LinkItem" />
      <span className="link_item__LinkItem">{title}</span>
    </div>
  );
};

export default LinkItem;
