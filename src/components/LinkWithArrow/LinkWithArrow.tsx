import { Link } from 'react-router-dom';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import './LinkWithArrow.css';

type LinkWithArrowProps = {
  to: string;
  label: string;
  style?: React.CSSProperties;
};

function LinkWithArrow({ to, label, style }: LinkWithArrowProps) {
  return (
    <Link
      style={style}
      to={to}
      className="view_resume_container__LinkWithArrow"
    >
      <span className="view_resume_text__LinkWithArrow">{label}</span>
      <ArrowIconSVG className="arrow_icon__LinkWithArrow" />
    </Link>
  );
}

export default LinkWithArrow;
