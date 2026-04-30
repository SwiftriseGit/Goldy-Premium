import { IconType, IconBaseProps } from "react-icons";
import Image from "next/image";

type VisitingPlace = {
  name: string;
  desc: string;
  image: string;
  icon?: IconType;
  iconProps?: IconBaseProps;
};

export default function VisitingPlaces({ places }: { places: VisitingPlace[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {places.map((place, i) => (
        <div key={i} className="rounded-2xl shadow-lg bg-[#FEFAE0] p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200">
          <div className="w-full h-32 relative mb-4 rounded-xl overflow-hidden">
            <Image src={place.image} alt={place.name} fill className="object-cover" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            {place.icon && <place.icon {...place.iconProps} />}
            <h3 className="text-xl font-semibold" style={{ color: '#c0592d' }}>{place.name}</h3>
          </div>
          <p className="text-[#7c6f57] dark:text-[#b8b09c] text-sm text-center">{place.desc}</p>
        </div>
      ))}
    </div>
  );
}
