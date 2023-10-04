interface Props {
  text: string;
}

const Label = ({ text }: Props) => {
  return (
    <label className="block text-gray-700 text-sm font-bold">{text}</label>
  );
};

export default Label;
