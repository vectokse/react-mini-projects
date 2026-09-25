import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { Spinner } from "../../../reusable-ui/Spinner";
import PrimaryBtn from "../../../reusable-ui/PrimaryBtn";

interface LoadMoreProps {
  hasMore: boolean;
  isFetchingMore: boolean;
  loadMoreResult: () => {};
}

export default function LoadMore({
  hasMore,
  isFetchingMore,
  loadMoreResult,
}: LoadMoreProps) {
  if (isFetchingMore) {
    return (
      <LoadMoreStyled>
        <Spinner />
      </LoadMoreStyled>
    );
  }
  return (
    <LoadMoreStyled>
      {hasMore && (
        <PrimaryBtn
          label="Voir plus de cocktails"
          icon={IoIosArrowDown}
          onClick={loadMoreResult}
        />
      )}
    </LoadMoreStyled>
  );
}

const LoadMoreStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;
