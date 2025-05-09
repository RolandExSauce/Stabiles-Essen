import { underConstruct } from "../../assets/image-icons-barrel";
import { IComingSoonProps } from "../../types/components.types";
import "../styles/ComingSoon.css";


//a simply reusable view to show for maintenance 
const ComingSoon: React.FC<IComingSoonProps> = ({ comingSoonDate }) => {
  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <img
            src={underConstruct}
            alt="under construction"
            className="coming-soon-image"
          />
          <div className="coming-soon-text">
            <p>Keep Cooking,</p>
            <p>Coming back soon</p>
            <p>at {comingSoonDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
