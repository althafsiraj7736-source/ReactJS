const Card = ({ elem }) => {
  return (
    <a
      href={elem.download_url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-52"
    >
      <div className="h-52 overflow-hidden rounded-xl shadow-lg bg-white hover:scale-105 transition duration-300">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="mt-3 text-lg font-bold truncate">
        {elem.author}
      </h2>
    </a>
  );
};

export default Card;