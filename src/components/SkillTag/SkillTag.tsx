import './SkillTag.css';

type SkillTagProps = {
  title: string;
};

const SkillTag = ({ title }: SkillTagProps) => {
  return <span className="title__SkillTag">{title}</span>;
};

export default SkillTag;
