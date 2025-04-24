import { useEffect, useState } from "react";
import FilterWeb from "./FilterWeb";
import ResultTableWeb from "./ResultTableWeb";
import ResultTableMobile from "./ResultTableMobile";
import { mainDatas } from "../constants/datas";
import FilterMobile from "./FilterMobile";

export interface Filter {
  gender: "MAG" | "WAG" | null;
  step: "Qualification" | "Final" | null;
  type: "Apparatus" | "Team" | "All-around" | null;
  level: "Seniors" | "Juniors" | null;
  branch:
    | "Vault"
    | "Floor Exercise"
    | "Pommel Horse"
    | "Rings"
    | "Paralel Bars"
    | "Horizontal Bar"
    | null;
}

const Result = () => {
  const [filter, setFilter] = useState<Filter>({
    gender: "MAG",
    step: "Qualification",
    type: "Apparatus",
    level: "Seniors",
    branch: "Floor Exercise",
  });

  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    getDatas();
  }, [filter]);

  const getDatas = async () => {
    setDatas(null);
    setTimeout(() => {
      setDatas(
        mainDatas
          .filter(
            (d: any) =>
              d.status != "Wait" &&
              d.status != "Go" &&
              (filter.type ? filter.type == d.type : true) &&
              (filter.step ? filter.step == d.step : true) &&
              (filter.level ? filter.level == d.level : true) &&
              (filter.branch ? filter.branch == d.branch : true) &&
              (filter.gender ? filter.gender == d.gender : true)
          )
          .sort((a: any, b: any) => a.rank - b.rank)
      );
    }, 1000);
  };

  return (
    <>
      <FilterWeb filter={filter} setFilter={setFilter} />
      <ResultTableWeb filter={filter} datas={datas} />
      <FilterMobile filter={filter} setFilter={setFilter} />
      <ResultTableMobile datas={datas} />
    </>
  );
};

export default Result;
