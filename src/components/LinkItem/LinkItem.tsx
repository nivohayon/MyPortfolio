import LinkChainSVG from '../../assets/link_chain.svg?react';
import './LinkItem.css';

type LinkItemProps = {
  title: string;
  url: string;
};

const LinkItem = ({ title, url }: LinkItemProps) => {
  const handleOpenLink = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleOpenLink} className="link_item_container__LinkItem">
      <LinkChainSVG className="link_chain__LinkItem" />
      <a className="link_item__LinkItem" href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

export default LinkItem;
