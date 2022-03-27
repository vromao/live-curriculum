import * as tagStyles from './styles.module.scss';

type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => <span className={tagStyles.container}>{text}</span>;

export default Tag;
