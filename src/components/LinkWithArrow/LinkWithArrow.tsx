import { Link } from 'react-router-dom';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import './LinkWithArrow.css';

type LinkWithArrowProps = {
  to: string;
  label: string;
};

function LinkWithArrow({ to, label }: LinkWithArrowProps) {
  return (
    <Link to={to} className="view_resume_container__LinkWithArrow">
      <span className="view_resume_text__LinkWithArrow">{label}</span>
      <ArrowIconSVG className="arrow_icon__LinkWithArrow" />
    </Link>
  );
}

export default LinkWithArrow;
