import Photo from "../../images/photo.jpg";

const Avatar = () => (
  <div className="w-14 h-14 border-2 rounded-full overflow-hidden">
    <img
      className="origin-top-left scale-[3.0] translate-x-[-52px] translate-y-[-5px]"
      src={Photo}
    />
  </div>
);

export default Avatar;
