interface NameAndTitleProps {
  name: string;
  title: string;
}

const NameAndTitle = ({ name, title }: NameAndTitleProps) => (
  <div className="flex flex-col ml-5">
    <div className="text-white uppercase text-lg font-semibold">{name}</div>
    <div className="text-white uppercase text-[10px] mt-[-8px]">{title}</div>
  </div>
);

export default NameAndTitle;
