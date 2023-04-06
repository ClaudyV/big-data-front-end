import "./HomeRightSection.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Results from "../../../pages/Results";

const HomeRightSection = () => {
  return (
    <div className="right-section-wrapper">
      <div className="top-section">
        <div className="title">
          <span>人口數、戶數按戶別及性別統計</span>
        </div>
        <div className="top-content">
          <div className="input-group">
            <div>
              <Autocomplete
                size="small"
                id="combo-box-demo"
                options={[]}
                sx={{
                  width: 73,
                }}
                renderInput={(params) => <TextField {...params} label="年份" />}
              />
            </div>
            <div>
              <Autocomplete
                size="small"
                id="combo-box-demo"
                options={[]}
                sx={{
                  width: 165,
                }}
                renderInput={(params) => (
                  <TextField {...params} label="縣/市" />
                )}
              />
            </div>
            <div>
              <Autocomplete
                size="small"
                id="combo-box-demo"
                options={[]}
                sx={{
                  width: 165,
                }}
                renderInput={(params) => <TextField {...params} label="區" />}
              />
            </div>
            <div>
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </div>
          </div>
          <div className="search-section">
            <hr className="line" />
            <div className="search">
              <Button variant="outlined" sx={{ borderRadius: 16 }}>
                搜尋結果
              </Button>
            </div>
            <hr className="line" />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <Results />
      </div>
    </div>
  );
};

export default HomeRightSection;
