import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/redux-hooks";
import { searchSelector } from "@store/selectors/selectors";
import { searchActions } from "@store/slices/searchSlice";
import { useSearchParams } from "react-router-dom";

export const useFilterToUrl = () => {
  const filter = useAppSelector(searchSelector);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filterFromQuery = searchParams.get("filter");
    if (filterFromQuery) {
      dispatch(searchActions.setFilter(filterFromQuery));
    }
  }, []);

  useEffect(() => {
    setSearchParams({ filter });
  }, [filter]);
};
