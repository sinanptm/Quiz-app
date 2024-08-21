import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ThreeDCardDemo } from "./CustomCard";
import { CardProps } from "@/types";
import { timeQuizes } from "@/constants";

const QuestionsTable = () => {
  
  return (
    <div>
      <InfiniteMovingCards
        items={timeQuizes}
        CardComponent={ThreeDCardDemo}
        direction="left"
        speed="fast"
        pauseOnHover={true}
      />
    </div>
  );
};

export default QuestionsTable;
