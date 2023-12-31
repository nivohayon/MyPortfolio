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
      <span className="text__Footer">{appData.inspiredByFooter}</span>
      <InlineLink text={appData.inspiredByText} link={appData.inspiredByLink} />
      <span className="text__Footer">
        {appData.andCodedInFooter}
        <InlineLink text={appData.vscodeText} link={appData.vscodeLink} />
        {appData.byYoursFooter}
        <InlineLink text={appData.reactText} link={appData.reactLink} />
        {appData.andFooter}
        <InlineLink text={appData.tsText} link={appData.tsLink} />
        {appData.usingFooter}
        <InlineLink text={appData.viteText} link={appData.viteLink} />
        {appData.deployedWithFooter}
        <InlineLink text={appData.vercelText} link={appData.vercelLink} />
        {appData.fontUsedFooter}
        <InlineLink text={appData.interText} link={appData.interLink} />
      </span>
    </div>
  );
}

export default Footer;
