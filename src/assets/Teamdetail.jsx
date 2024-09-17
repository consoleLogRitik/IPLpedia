import React from "react";
import { TEAM_IMG_URL } from "../const";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Charts } from "./Charts";
import Loader from "./Loader";

const List = ({ name }) => {
  return (
    <div className="w-full hover:bg-slate-200 p-4 rounded-md active:scale-95 transition-transform duration-300">
      <h4 className="text-center">{name}</h4>
    </div>
  );
};

function Teamdetail() {
  const location = useLocation();
  const { imgCode, teamName } = location.state;
  
  const [alldetails, setAlldetails] = useState(null);
  const [versus, setVersus] = useState(null);

  useEffect(() => {
    axios
      .get("https://sagar-ipl-api.onrender.com/api/team-record?team=" + teamName)
      .then((res) => {
        setAlldetails(res?.data[teamName]?.overall);
        setVersus(res?.data[teamName]?.against);
      });
  }, []);

  if (!alldetails)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  const { won, loss, title, matchesplayed } = alldetails;

  return (
    <>
      <div className="w-full flex flex-col bg-slate-100">
        {/* Team Info Section */}
        <div className="p-3 mt-3 bg-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          {/* Team Image */}
          <img
            src={TEAM_IMG_URL + imgCode}
            className="rounded-md shadow-sm w-full md:w-1/4"
            alt="Team Logo"
          />
          {/* Team Stats */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-lg md:text-xl">Total Matches: {matchesplayed}</h3>
            <h3 className="font-semibold text-lg md:text-xl">Won: {won}</h3>
            <h3 className="font-semibold text-lg md:text-xl">Lost: {loss}</h3>
            <h3 className="font-semibold text-lg md:text-xl">Number of Titles: {title}</h3>
          </div>
          {/* Team Chart */}
          <div className="w-full md:w-1/3">
            <Charts obj={{ win: won, fail: loss, match: matchesplayed }} />
          </div>
        </div>

        {/* Versus Section */}
        <div className="w-full p-4">
          <h3 className="font-bold text-xl text-center md:text-left">Against:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(versus).map((key, i) => (
              <Link key={i} to="/against" state={{ name: key, details: versus[key], mainTeam: teamName }}>
                <List name={key} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teamdetail;
