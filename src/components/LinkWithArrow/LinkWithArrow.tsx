import { Link } from 'react-router-dom';
import ArrowIconSVG from '../../assets/arrow_icon.svg?react';
import { combineClasses } from '../../utils/combineClasses';
import './LinkWithArrow.css';

type LinkWithArrowProps = {
  to: string;
  label: string;
  reversed?: boolean;
  className?: string;
  arrowColor?: string;
};

function LinkWithArrow({
  to,
  label,
  reversed,
  className,
  arrowColor,
}: LinkWithArrowProps) {
  return (
    <Link
      to={to}
      reloadDocument
      className={combineClasses(
        'view_resume_container__LinkWithArrow',
        className ?? '',
        reversed ? 'reversed_link__LinkWithArrow' : ''
      )}
    >
      <span className="view_resume_text__LinkWithArrow">{label}</span>
      <ArrowIconSVG
        fill={arrowColor ?? 'currentColor'}
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
