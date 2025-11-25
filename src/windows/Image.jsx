import { WindowControl } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { useWindowStore } from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div>
      <div id="window-header">
        <WindowControl target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 overflow-y-auto h-[400px] bg-white text-black flex items-center justify-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-md"
          />
        )}
      </div>
    </div>
  );
};

const ImageFile = WindowWrapper(Image, "imgfile");

export default ImageFile;
