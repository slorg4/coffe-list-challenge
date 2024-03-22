import { useState } from "react";
import { type Product } from "../scripts/api";
import StarIcon from "./StarIcon";

function Rate({ product }: { product: Product }) {
  const [isVoted, setIsVoted] = useState(false);
  const [votes, setVotes] = useState(product.votes);

  function toggleVote() {
    setIsVoted(!isVoted);
    setVotes(!isVoted ? votes + 1 : votes - 1);
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 text-sm">
        <button onClick={toggleVote}>
          <StarIcon isFilled={isVoted} />
        </button>
        <div className="flex gap-1">
          {product.rating && (
            <p className="text-coffe-5">
              {Number(product.rating) % 1 == 0
                ? Number(product.rating).toFixed(1)
                : product.rating}
            </p>
          )}
          <p className="text-coffe-3 font-bold">
            {votes ? `(${votes} votes)` : "No ratings"}
          </p>
        </div>
      </div>
      <p className="text-sm text-coffe-7">{product.available || "Sold out"}</p>
    </div>
  );
}

export default Rate;
