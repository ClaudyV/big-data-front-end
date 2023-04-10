import { useEffect, useState } from "react";

import { Skeleton } from "@mui/material";
import LineChart from "../components/Ui/Charts/BarChart";
import PieChart from "../components/Ui/Charts/PieChart";
import { apiStatistics } from "../services/statistics";

import "./../styles/Results.css";

interface Statistics {
  year: string | null;
  county: string | null;
  district: string | null;
}

interface StatProps {
  stats: Statistics | null;
}

const Results: React.FC<StatProps> = ({ stats }) => {
  const [chartResult, setChartResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // Get household ordinary and household single by year, county and district
  const getHouseholdStatistics = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await apiStatistics.getHouseholdStatistics({ stats });
      if (response) {
        if (response.responseData) {
          setChartResult(response.responseData);
        } else {
          if (response.responseMessage) {
            setErrorMessage(response.responseMessage);
          } else {
            setErrorMessage("有發生錯誤， 請再試一次！");
          }
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHouseholdStatistics();
  }, [stats]);

  return (
    <>
      {!loading ? (
        chartResult.length ? (
          <div className="result-wrapper">
            <div className="result-title">
              <span>
                {stats?.year}年 {stats?.county} {stats?.district}
              </span>
            </div>
            <div className="result-chart">
              <LineChart data={chartResult} />
            </div>
            <div className="result-chart">
              <PieChart data={chartResult} />
            </div>
          </div>
        ) : (
          <div className="result-chart error-message">{errorMessage}</div>
        )
      ) : (
        <div className="result-wrapper">
          <div className="result-title">
            <Skeleton variant="rectangular" />
          </div>
          <div className="result-chart chart-loading">
            <Skeleton variant="rectangular" height={"100%"} />
          </div>
          <div className="result-chart chart-loading">
            <Skeleton variant="rectangular" height={"100%"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
