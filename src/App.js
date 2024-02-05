import "./App.css";
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
const image = [
  { id: "1", imageName: "01.jpg", tag: "2021" },
  { id: "2", imageName: "02.jpg", tag: "2021" },
  { id: "3", imageName: "03.jpg", tag: "2021" },
  { id: "4", imageName: "04.jpg", tag: "2021" },
  { id: "5", imageName: "05.jpg", tag: "2022" },
  { id: "6", imageName: "06.jpg", tag: "2022" },
  { id: "7", imageName: "07.jpg", tag: "2022" },
  { id: "8", imageName: "08.jpg", tag: "2022" },
  { id: "9", imageName: "09.jpg", tag: "2022" },
  { id: "10", imageName: "10.jpg", tag: "2022" },
  { id: "11", imageName: "01.jpg", tag: "2022" },
  { id: "12", imageName: "02.jpg", tag: "2023" },
  { id: "13", imageName: "03.jpg", tag: "2023" },
  { id: "14", imageName: "04.jpg", tag: "2023" },
  { id: "15", imageName: "05.jpg", tag: "2023" },
  { id: "16", imageName: "06.jpg", tag: "2023" },
];
const options = {};
function App() {
  const [tag, setTag] = useState("all");
  const [filterImage, setFilterimage] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilterimage(image)
      : setFilterimage(image.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div className="App" handleSetTag={setTag}>
      <div className="tags">
        <TagButton
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name="2021"
          handleSetTag={setTag}
          tagActive={tag === "2021" ? true : false}
        />
        <TagButton
          name="2022"
          handleSetTag={setTag}
          tagActive={tag === "2022" ? true : false}
        />
        <TagButton
          name="2023"
          handleSetTag={setTag}
          tagActive={tag === "2023" ? true : false}
        />
      </div>
      <SRLWrapper options={options}>
        <div className="container">
          {filterImage.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/img/${image.imageName}`}>
                <img className="image" src={`/img/${image.imageName}`} alt="" />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default App;
