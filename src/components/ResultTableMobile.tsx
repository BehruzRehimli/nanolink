import { Collapse, Spin } from "antd";
import { DataType } from "./ResultTableWeb";

const ResultTableMobile = ({ datas }: { datas: DataType[] }) => {
  return (
    <div className="result-table-mobile mt-4">
      {datas != null ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {datas.map((data: DataType, i: number) => (
            <div>
              <Collapse
                size="large"
                items={[
                  {
                    key: i,
                    label: (
                      <div className="d-flex justify-content-between align-items-center pe-3">
                        <span className="rank-box">{data.rank}</span>
                        <span>{data.team.name}</span>
                        <span>{data.name}</span>
                        <span>{Number(data.app).toFixed(3)}</span>
                      </div>
                    ),
                    children: (
                      <div>
                        <div className="d-flex justify-content-end gap-3">
                          <div>
                            <span>D: </span>
                            <span>{Number(data.d).toFixed(3)}</span>
                          </div>
                          <div>
                            <span>E: </span>
                            <span>{Number(data.e).toFixed(3)}</span>
                          </div>
                          <div>
                            <span>P: </span>
                            <span>{Number(data.p).toFixed(1)}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between gap-3 mt-3">
                          <span>App</span>
                          <div className="d-flex align-items-center gap-3 justify-content-end">
                            {Number(data.app).toFixed(3)}
                            <span className="rank-box">{data.rank}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between gap-3 mt-3">
                          <span>AA</span>
                          <div className="d-flex align-items-center gap-3 justify-content-end">
                            {Number(data.aa).toFixed(3)}
                            <span className="rank-box">{data.rank}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between gap-3 mt-3">
                          <span>Team</span>
                          <div className="d-flex align-items-center gap-3 justify-content-end">
                            {Number(data.team.point).toFixed(3)}
                            <span className="rank-box">{data.team.rank}</span>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center pt-5"
          style={{ minHeight: 500 }}
        >
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default ResultTableMobile;
