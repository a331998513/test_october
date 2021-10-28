import { useSelector } from "react-redux";
import type { RootState } from "../../utilities/Types";
import Snippet from "./Snippet";
import * as S from "./SearchResultsElements";

const SearchResults = () => {
  const DATA = useSelector((state: RootState) => state.search.items);

  return (
    <S.Wrapper>
      {DATA &&
        DATA.map((props, index) => {
          return <Snippet {...props} key={index} />;
        })}
    </S.Wrapper>
  );
};

export default SearchResults;
