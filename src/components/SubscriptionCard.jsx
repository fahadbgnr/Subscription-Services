import { FaStar } from "react-icons/fa";

const SubscriptionBox = ({ box }) => {
  const {
    name,
    thumbnail,
    frequency,
    price,
    tech_category,
    ratings,
    number_of_reviews,
  } = box;

  return (
    <div className="card card-compact bg-base-100 shadow-lg rounded-lg">
      {/* Thumbnail */}
      <figure>
        <img src={thumbnail} alt={name} className="h-48 w-full object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{tech_category}</p>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <p>
            <span className="font-semibold">${price}</span> / {frequency}
          </p>
          {/* <div className="flex items-center gap-1 text-orange-500">
            <FaStar />
            <span className="text-gray-700">{ratings} ({number_of_reviews})</span>
          </div> */}
        </div>

        <div className="card-actions justify-end mt-2">
          <button className="btn btn-outline btn-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
