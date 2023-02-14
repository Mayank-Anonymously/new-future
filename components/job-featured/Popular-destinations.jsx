import Link from "next/link";
import { popularDestination } from "../../data/PopularDestination";

const PopularDetination = () => {
  return (
    <>
      {popularDestination.slice(0, 6).map((item) => (
        <div className="news-block col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src={item.image} alt={item.name} />
              </figure>
            </div>
            <div className="lower-content">
              <h3>
                <Link href={`#`}>{item.name}</Link>
              </h3>

              <span className="icon flaticon-map-locator"></span>
              {item.location}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularDetination;
