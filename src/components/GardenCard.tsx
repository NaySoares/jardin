import Image from 'next/image';

interface GardenCardProps {
  imageUrl: string;
  type: string;
  title: string;
  description: string;
  price: number;
}

const GardenCard: React.FC<GardenCardProps> = ({ imageUrl, type, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row">
      <div className="relative w-48 md:w-80 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-base text-gray-500">{type}</p>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <button aria-label="Adicionar aos favoritos">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <p className="text-gray-700 mt-2 text-base">{description}</p>
        </div>
        <div className="text-right mt-4">
          <p className="text-xl font-semibold">R${price} <span className="text-base font-normal text-gray-500">/temporada</span></p>
        </div>
      </div>
    </div>
  );
};

export default GardenCard;