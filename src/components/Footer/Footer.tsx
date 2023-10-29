import { appData } from '../../data/appData';
import './Footer.css';

type InlineLinkProps = {
  text: string;
  link: string;
};

const InlineLink = ({ text, link }: InlineLinkProps) => {
  return (
    <a href={link} target="_blank" className="inline_link__Footer">
      {text}
    </a>
  );
};

function Footer() {
  return (
    <div className="container__Footer">
      <span className="text__Footer">Inspired by </span>
      <InlineLink
        text={appData.inspiredByText}
        link={appData.inspiredByLink}
      />{' '}
      <span className="text__Footer">
        and coded in{' '}
        <InlineLink text={appData.vscodeText} link={appData.vscodeLink} /> by
        yours truly. Built with{' '}
        <InlineLink text={appData.reactText} link={appData.reactLink} /> and{' '}
        <InlineLink text={appData.tsText} link={appData.tsLink} /> using{' '}
        <InlineLink text={appData.viteText} link={appData.viteLink} />, deployed
        with{' '}
        <InlineLink text={appData.ghPagesText} link={appData.ghPagesLink} />.
        The font family used is{' '}
        <InlineLink text={appData.interText} link={appData.interLink} />.
      </span>
    </div>
  );
}

export default Footer;
