import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <span>Logo</span>
      </div>
      <div className="settings">
        <img src="/assets/img/settings.svg" alt="Settings" />
      </div>
    </div>
  );
};

export default Topbar;
