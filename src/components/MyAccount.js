import React from "react";

import { numberWithCommas } from "../utils/services";

const MyAccount = props => {
  let totalAvailable = props.total - props.sumAmounts;
  let percentage = 100 - ((props.sumAmounts / props.total) * 100).toFixed(0);

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="header">My Account</h2>
      </div>

      <div className="col-4 text-amounts">
        <div className="my-account-amounts">{`£ ${numberWithCommas(
          props.sumAmounts
        )}`}</div>
        <span>total sent</span>
      </div>

      <div className="col-4">
        <svg viewBox="0 0 36 36" className="circular-chart orange">
          <path
            className="circle-bg"
            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${percentage > 0 ? percentage : 0}, 100`}
            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text
            x="18"
            y="20.35"
            className="percentage"
          >{`${percentage}%`}</text>
        </svg>
      </div>

      <div className="col-4">
        <div className="my-account-amounts">{`£ ${numberWithCommas(
          totalAvailable
        )}`}</div>
        <span>left available</span>
      </div>
    </div>
  );
};

export default MyAccount;
