import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Spinner } from '@chakra-ui/spinner';
import * as utils from '../../utils/LeaderboardUtils';
import Table from '../../components/Table';

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [transformedData, setTransformedData] = useState([]);
  const [colors, setColors] = useState({});
  const [activeLine, setActiveLine] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    getLeaderboardData();
    fetchColors();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTransformedData(utils.transformDataForChart(leaderboardData));
  }, [leaderboardData]);

  const getLeaderboardData = async () => {
    const leaderboard = await utils.fetchLeaderboard();
    setLeaderboardData(leaderboard);
  };

  const fetchColors = async () => {
    const colorsMap = await utils.colorMap();
    setColors(colorsMap);
  };

  const handleAddEntry = async () => {
    const newEntry = await utils.addEntry();
    setLeaderboardData((prevData) => [...prevData, newEntry]);
  };

  const handleRemoveAll = async () => {
    await utils.removeAll();
    setLeaderboardData([]);
  };

  const handleAddPoints = async () => {
    const addPointsToEntry = await utils.addPoints();
    setLeaderboardData((prevData) =>
      prevData.map((entry) =>
        entry.username === addPointsToEntry.username ? addPointsToEntry : entry
      )
    );
    getLeaderboardData();
  };

  const handleLegendClick = (username) =>
    setActiveLine((prev) => (prev === username ? null : username));

  const sortedLeaderboardData = [...leaderboardData].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className="flex w-full flex-col items-center gap-20">
      {/* <div className="flex flex-col gap-5">
        <button onClick={handleAddEntry}>Add entry to leaderboard</button>
        <button onClick={handleRemoveAll}>Remove all entries</button>
        <button onClick={handleAddPoints}>Add 3 points</button>
      </div> */}

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-[#58659f] p-5 mobile:w-full tabletVert:w-4/5 desktop:w-2/3">
        <h2 className="pb-2 font-semibold tabletVert:text-2xl tabletHori:text-3xl laptop:text-4xl">
          The Current Leader Is:
        </h2>
        {sortedLeaderboardData.length === 0 ? (
          <Spinner width="3rem" height="3rem" />
        ) : (
          <>
            <span className="text-yellow-300 tabletVert:text-lg tabletHori:text-xl laptop:text-2xl">
              {sortedLeaderboardData[0].username}
            </span>
            <span className="text-yellow-300 tabletVert:text-lg tabletHori:text-xl laptop:text-2xl">
              {sortedLeaderboardData[0].points} points
            </span>
          </>
        )}
      </div>

      {transformedData.length === 0 ? (
        <Spinner width="3rem" height="3rem" />
      ) : (
        <>
          <Table data={leaderboardData} />

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={sortedLeaderboardData}
              margin={
                window.innerWidth >= 1280
                  ? { left: -35, right: 35, bottom: 70 }
                  : isMobile
                    ? { left: -35, right: 0, bottom: 0 }
                    : { left: -35, right: 0, bottom: 70 }
              }
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="username"
                tick={{ fill: 'white', fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                hide={isMobile ? true : false}
              />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: '#13172d' }} />
              <Bar dataKey="points" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={transformedData}
              margin={
                window.innerWidth >= 1280
                  ? { left: -25, right: 35 }
                  : isMobile
                    ? { left: -35, right: 5 }
                    : { left: -25, right: 10 }
              }
            >
              <XAxis
                dataKey="timestamp"
                interval={0}
                angle={-45}
                textAnchor="end"
                hide={isMobile ? true : false}
              />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: '#13172d' }} />
              <CartesianGrid strokeDasharray="3 3" />
              {Object.keys(transformedData[0])
                .filter((key) => key !== 'timestamp')
                .map((username) => {
                  if (username === activeLine || activeLine === null) {
                    return (
                      <Line
                        key={username}
                        type="monotone"
                        dataKey={username}
                        stroke={colors[username]}
                      />
                    );
                  }
                  return null;
                })}
              <Legend
                onClick={(e) => handleLegendClick(e.value)}
                wrapperStyle={
                  isMobile ? { bottom: -30, left: -5 } : { bottom: -30 }
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}

      <span>Click the legend to sort by line!</span>
    </div>
  );
}
