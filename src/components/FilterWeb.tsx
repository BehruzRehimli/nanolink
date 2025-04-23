import { Button } from "antd";
import { filters } from "../constants/filter";
import { Filter } from "./Result";

const FilterWeb = ({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Function;
}) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
        <div className="filter-box">
          {filters.genders.map((gender: string) => (
            <Button
              key={gender}
              type="text"
              onClick={() => setFilter((prev: Filter) => ({ ...prev, gender }))}
              className={`filter-item ${filter.gender == gender && "active"}`}
            >
              {gender}
            </Button>
          ))}
        </div>
        <div className="filter-box">
          {filters.steps.map((step: string) => (
            <Button
              key={step}
              type="text"
              onClick={() => setFilter((prev: Filter) => ({ ...prev, step }))}
              className={`filter-item ${filter.step == step && "active"}`}
            >
              {step}
            </Button>
          ))}
        </div>
        <div className="filter-box">
          {filters.types.map((type: string) => (
            <Button
              key={type}
              type="text"
              onClick={() => setFilter((prev: Filter) => ({ ...prev, type }))}
              className={`filter-item ${filter.type == type && "active"}`}
            >
              {type}
            </Button>
          ))}
        </div>
        <div className="filter-box">
          {filters.levels.map((level: string) => (
            <Button
              key={level}
              type="text"
              onClick={() => setFilter((prev: Filter) => ({ ...prev, level }))}
              className={`filter-item ${filter.level == level && "active"}`}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 m-auto" style={{maxWidth:"50%"}}>
        {filters.branches.map((branch: any) => (
          <Button
            key={branch.name}
            type="text"
            onClick={() => setFilter((prev: Filter) => ({ ...prev, branch: branch.name}))}
            className={`d-block`}
            style={{flex:1, minWidth:120 }}
          >
            {branch.svg}
            {filter.branch==branch.name && <p className="ttp mt-2">{branch.name}</p>}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterWeb;
