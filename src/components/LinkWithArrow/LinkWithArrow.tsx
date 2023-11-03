import { Link } from 'react-router-dom';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import { combineClasses } from '../../utils/combineClasses';
import './LinkWithArrow.css';

type LinkWithArrowProps = {
  to: string;
  label: string;
  className?: string;
};

function LinkWithArrow({ to, label, className }: LinkWithArrowProps) {
  return (
    <Link
      to={to}
      className={combineClasses(
        'view_resume_container__LinkWithArrow',
        className
      )}
    >
      <span className="view_resume_text__LinkWithArrow">{label}</span>
      <ArrowIconSVG className="arrow_icon__LinkWithArrow" />
    </Link>
  );
}

export default LinkWithArrow;
