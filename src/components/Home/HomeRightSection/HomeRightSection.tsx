import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import AREA_DATA, { District } from "../../../constants/countyAndDistrict";
import Results from "../../../pages/Results";
import { apiStatistics } from "../../../services/statistics";

import "./HomeRightSection.css";

interface Statistics {
  year: string | null;
  county: string | null;
  district: string | null;
}

const HomeRightSection = () => {
  const { year, county, district } = useParams();
  const navigate = useNavigate();
  const [yearValue, setYearValue] = useState<string | null>(null);
  const [allYears, setAllYears] = useState([]);
  const [countyValue, setCountyValue]: any = useState<string | null>(null);
  const [districValue, setDistrictValue]: any = useState<string | null>(null);
  const [districtList, setDistrictList] = useState<District[]>([]);
  const [isdistrictDisabled, setIsDistrictDisabled] = useState<boolean>(true);
  const [submitResult, setSubmitResult]: any = useState<Statistics>({
    year: null,
    county: null,
    district: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  // County List options
  const countyOptions = AREA_DATA.map((option) => option.name);

  // County Change based on events
  const handleCountyChange = (event: any, value: string | null) => {
    setCountyValue(value);
    onCountySelected(value);
    setDistrictValue(null);
    if (!value) {
      setIsDistrictDisabled(true);
    } else {
      setIsDistrictDisabled(false);
    }
  };

  // Year Change based on events
  const handleYearChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setYearValue(value);
  };

  // Execute when a county is selected
  const onCountySelected = (countySelected: string | null) => {
    const selectedCounty = AREA_DATA.find(
      (county) => county.name === countySelected
    );
    if (selectedCounty) {
      setDistrictList(selectedCounty.districts);
    }
  };

  // Display Results upon submit
  const handleSubmit = (event: React.ChangeEvent<{}>) => {
    event.preventDefault();
    setSubmitResult({
      year: yearValue,
      county: countyValue,
      district: districValue,
    });
    setSubmitted(true);
    navigate(
      `/${yearValue}/${encodeURIComponent(countyValue)}/${encodeURIComponent(
        districValue
      )}`
    );
  };

  // Get all Years
  const getAllYears = async () => {
    setAllYears([]);
    setLoading(true);
    try {
      const response = await apiStatistics.getAllYears();
      if (response) {
        const yearsToNumbers =
          response.paths["/ODRP019/{yyy}"].get.parameters[0].enum;
        setAllYears(yearsToNumbers.map((num: string) => num.toString()));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllYears();
  }, []);

  useEffect(() => {
    if (year !== undefined || county !== undefined || district !== undefined) {
      setSubmitResult({
        year,
        county,
        district,
      });
      setSubmitted(true);
    }
  }, [year, county, district]);

  return (
    <>
      <div className="right-section-wrapper">
        <div className="taiwan-wrapper-right">
          <div className="taiwan-right">
            <span>TAIWAN</span>
          </div>
        </div>
        <div className="top-section">
          <div className="title">
            <span>人口數、戶數按戶別及性別統計</span>
          </div>
          <div className="top-content">
            <div className="input-group">
              <div>
                <Autocomplete
                  value={yearValue}
                  options={allYears}
                  onChange={handleYearChange}
                  loading={loading}
                  size="small"
                  id="combo-box-demo"
                  sx={{
                    width: 93,
                    backgroundColor: "#ffffff",
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="年份" />
                  )}
                />
              </div>
              <div>
                <Autocomplete
                  value={countyValue}
                  options={countyOptions}
                  onChange={handleCountyChange}
                  size="small"
                  id="combo-box-demo"
                  sx={{
                    width: 165,
                    backgroundColor: "#ffffff",
                    [`@media (max-width: 980px)`]: {
                      width: "100%",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="縣/市"
                      placeholder="請選擇縣/市"
                    />
                  )}
                />
              </div>
              <div>
                <Autocomplete
                  options={districtList.map((option: any) => option.name)}
                  value={districValue}
                  onChange={(event: any, newValue: string | null) => {
                    setDistrictValue(newValue);
                  }}
                  size="small"
                  id="combo-box-demo"
                  sx={{
                    width: 165,
                    backgroundColor: "#ffffff",
                    [`@media (max-width: 980px)`]: {
                      width: "100%",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={"區"}
                      placeholder="請選擇區"
                    />
                  )}
                  disabled={isdistrictDisabled}
                />
              </div>
              <div>
                <Button
                  disabled={
                    yearValue === null ||
                    countyValue === null ||
                    districValue === null
                  }
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    [`@media (max-width: 980px)`]: {
                      width: "100%",
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="search-section">
              <hr className="line" />
              <div className="search">
                <span>搜尋結果</span>
              </div>
              <hr className="line" />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          {submitted && <Results stats={submitResult} />}
        </div>
      </div>
    </>
  );
};

export default HomeRightSection;
