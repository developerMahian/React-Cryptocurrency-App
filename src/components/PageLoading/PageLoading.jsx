import LoadingHeading from "./LoadingHeading";
import "./PageLoading.scss";

const PageLoading = ({ simplified }) => {
  let cube = [];
  let count = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      count++;

      cube.push(<div className={`cell d-${i + j}`} key={count}></div>);
    }
  }

  return (
    <div className="page-loader-container">
      <LoadingHeading />

      {!simplified && (
        <div className="mosaic-loader">{cube.map((el) => el)}</div>
      )}
    </div>
  );
};

export default PageLoading;
