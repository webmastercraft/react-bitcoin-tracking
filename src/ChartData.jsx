import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer
} from "victory";

import format from "date-fns/format";
import { formatPrice } from "./CryptoTracker";

import ChartViewer from "./ChartViewer";

const ChartData = ({ cryptoName, isExpanded }) => {
  let [count, setCount] = useState(650);
  let [chatData, setChatData] = useState([{
    x: 0,
    y: 650
  }]);
  let [xAsix, setxAsix] = useState(1)

  const SECOND_MS = 1000;
  const START_PRICE = 650;

  useInterval(() => {
    // Your custom logic here
    let sec_percent = START_PRICE * 10 / (365 * 24 * 3600);

    const data = {
      x: xAsix,
      y: (count + sec_percent).toFixed(5)
    };

    setChatData([...chatData, data]);
    setCount(count + sec_percent);
    setxAsix(xAsix + 1);
  }, SECOND_MS);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <div className="chart">
      {isLoading ? (
        <div className="loading-container">
          <span>Loading...</span>
        </div>
      ) : !isExpanded ? (
        <div>
          <ChartViewer data={chatData}  />
        </div>
      ) : (<ChartViewer data={chatData} />)}
    </div>
  );
};

export default ChartData;
