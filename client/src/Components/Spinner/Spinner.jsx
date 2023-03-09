import ClipLoader from "react-spinners/ClipLoader";
import ("./Spinner.css");

const Spinner = ({loading}) => {
    return (
        <div className="spinner">
        <ClipLoader
        color={"black"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
};

export default Spinner;