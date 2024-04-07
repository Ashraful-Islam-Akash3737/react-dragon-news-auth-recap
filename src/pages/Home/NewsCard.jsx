import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { total_view, title, rating, author, thumbnail_url, image_url, details, category_id, _id } = news;
    return (
        <div className="card w-full bg-base-100 border-[#f3f3f3] mb-8 border-2 p-5">
            <figure className="w-full"><img className="w-full h-[400px]" src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? 
                    <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className="font-bold text-blue-600 ml-2">read more...</Link></p>:
                    <p>{details}</p>
                }
                    
                
            </div>
        </div>
    );
};

export default NewsCard;
