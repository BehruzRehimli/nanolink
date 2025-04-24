import { Button, Modal } from "antd";
import { Filter } from "./Result";
import { useState } from "react";
import { filters } from "../constants/filter";

const FilterMobile = ({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Function;
}) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="filter-mobile">
      <div className="text-end mt-4">
        <Button type="text" onClick={() => setModal(true)}>
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
      <Modal
        title={"Filter"}
        closeIcon={<span>x</span>}
        footer={[]}
        open={modal}
        onCancel={() => setModal(false)}
      >
        <div>
          <div className="d-flex flex-column gap-3 mt-3">
            <div className="filter-box">
              {filters.genders.map((gender: string) => (
                <Button
                  key={gender}
                  type="text"
                  onClick={() => {
                    if (filter.gender == gender) {
                      setFilter((prev: Filter) => ({ ...prev, gender: null }));
                    } else {
                      setFilter((prev: Filter) => ({ ...prev, gender }));
                    }
                  }}
                  className={`filter-item ${
                    filter.gender == gender && "active"
                  }`}
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
                  onClick={() => {
                    if (filter.step == step) {
                      setFilter((prev: Filter) => ({ ...prev, step: null }));
                    } else {
                      setFilter((prev: Filter) => ({ ...prev, step }));
                    }
                  }}
                  className={`filter-item ${filter.step == step && "active"}`}
                >
                  {step}
                </Button>
              ))}
            </div>
            <div className="filter-box " style={{ overflowX: "auto" }}>
              {filters.types.map((type: string) => (
                <Button
                  key={type}
                  type="text"
                  onClick={() => {
                    if (filter.type == type) {
                      setFilter((prev: Filter) => ({ ...prev, type: null }));
                    } else {
                      setFilter((prev: Filter) => ({ ...prev, type }));
                    }
                  }}
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
                  onClick={() => {
                    if (filter.level == level) {
                      setFilter((prev: Filter) => ({ ...prev, level: null }));
                    } else {
                      setFilter((prev: Filter) => ({ ...prev, level }));
                    }
                  }}
                  className={`filter-item ${filter.level == level && "active"}`}
                >
                  {level}
                </Button>
              ))}
            </div>
            <div className="filter-box " style={{ overflowX: "auto" }}>
              {filters?.branches?.map((branch: any) => (
                <Button
                  key={branch.name}
                  type="text"
                  onClick={() => {
                    if (filter.branch == branch.name) {
                      setFilter((prev: Filter) => ({ ...prev, branch: null }));
                    } else {
                      setFilter((prev: Filter) => ({
                        ...prev,
                        branch: branch.name,
                      }));
                    }
                  }}
                  className={`filter-item ${
                    filter.branch == branch.name && "active"
                  }`}
                >
                  {branch.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilterMobile;
