import { Link } from 'react-router-dom';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import { combineClasses } from '../../utils/combineClasses';
import './LinkWithArrow.css';

type LinkWithArrowProps = {
  to: string;
  label: string;
  reversed?: boolean;
  className?: string;
};

function LinkWithArrow({ to, label, reversed, className }: LinkWithArrowProps) {
  return (
    <Link
      to={to}
      className={combineClasses(
        'view_resume_container__LinkWithArrow',
        className ?? '',
        reversed ? 'reversed_link__LinkWithArrow' : ''
      )}
    >
      <span className="view_resume_text__LinkWithArrow">{label}</span>
      <ArrowIconSVG
        className={
          reversed
            ? 'reversed_arrow_icon___LinkWithArrow'
            : 'arrow_icon__LinkWithArrow'
        }
      />
    </Link>
  );
}

export default LinkWithArrow;
