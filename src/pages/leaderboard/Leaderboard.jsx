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

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [transformedData, setTransformedData] = useState([]);
  const [colors, setColors] = useState({});

  useEffect(() => {
    getLeaderboardData();
    fetchColors();
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

  return (
    <div className="flex w-full flex-col items-center gap-20">
      <div className="flex flex-col gap-5">
        <button onClick={handleAddEntry}>Add entry to leaderboard</button>
        <button onClick={handleRemoveAll}>Remove all entries</button>
        <button onClick={handleAddPoints}>Add 3 points</button>
      </div>
      <div className="flex w-2/3 flex-col gap-3">
        <h1 className="text-center">Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th className="w-1/2 text-center">Username</th>
              <th className="w-1/2 text-center">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.username}>
                <td className="text-center">{entry.username}</td>
                <td className="text-center">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {transformedData.length === 0 ? (
        <Spinner width="3rem" height="3rem" />
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={leaderboardData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="username" tick={{ fill: 'white' }} />
            <YAxis />
            <Tooltip contentStyle={{ color: '#8884d8' }} />
            <Bar dataKey="points" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {transformedData.length === 0 ? (
        <Spinner width="3rem" height="3rem" />
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={600} height={300} data={transformedData}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            {Object.keys(transformedData[0])
              .filter((key) => key !== 'timestamp')
              .map((username) => (
                <Line
                  key={username}
                  type="monotone"
                  dataKey={username}
                  stroke={colors[username]}
                />
              ))}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
