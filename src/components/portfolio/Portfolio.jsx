import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { webdevPortfolio, film } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("webdev")
  const [data, setData] = useState([])

  const list = [
    {
      id: "webdev",
      title: "Web Development"
    },
    {
      id: "film",
      title: "Film & Video"
    }
  ];

  useEffect(() => {

    switch (selected) {
      case "webdev":
        setData(webdevPortfolio);
        break;
      case "film":
        setData(film);
        break;
      default:
        setData(webdevPortfolio);
    }

  }, [selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img 
            src={d.img}
            />
            <h3>{d.title}</h3>
            <a href={d.link} target="_blank">Application Here</a>
          </div>
          
        ))}
      </div>
      
    </div>
  )
}
