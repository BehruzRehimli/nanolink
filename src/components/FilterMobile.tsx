import { Button } from "antd";
import { Filter } from "./Result";

const FilterMobile = ({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Function;
}) => {
  return (
    <div className="filter-mobile">
      <div className="text-end mt-4">
        <Button type="text">
          <div className="filter-button">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 1H1.33337L6.66671 7.30667V11.6667L9.33337 13V7.30667L14.6667 1Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filter
          </div>
        </Button>
      </div>
      <div className="d-flex flex-wrap gap-3 mt-4">
        {filter.gender && (
          <div className="filter-elements">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setFilter((prev: Filter) => ({ ...prev, gender: null }))
              }
            >
              <path
                d="M9 3L3 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 3L9 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {filter?.gender}
          </div>
        )}
        {filter.step && (
          <div className="filter-elements">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setFilter((prev: Filter) => ({ ...prev, step: null }))
              }
            >
              <path
                d="M9 3L3 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 3L9 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {filter?.step}
          </div>
        )}
        {filter.level && (
          <div className="filter-elements">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setFilter((prev: Filter) => ({ ...prev, level: null }))
              }
            >
              <path
                d="M9 3L3 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 3L9 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {filter?.level}
          </div>
        )}
        {filter.type && (
          <div className="filter-elements">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setFilter((prev: Filter) => ({ ...prev, type: null }))
              }
            >
              <path
                d="M9 3L3 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 3L9 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {filter?.type}
          </div>
        )}
        {filter.branch && (
          <div className="filter-elements">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setFilter((prev: Filter) => ({ ...prev, branch: null }))
              }
            >
              <path
                d="M9 3L3 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 3L9 9"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {filter?.branch}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterMobile;
