import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ThreeDCardDemo } from "./CustomCard";
import { timeQuizzes } from "@/constants";

const QuestionsTable = () => {
  
  return (
    <div>
      <InfiniteMovingCards
        items={timeQuizzes}
        CardComponent={ThreeDCardDemo}
        direction="left"
        speed="fast"
        pauseOnHover={true}
      />
    </div>
  );
};

export default QuestionsTable;
