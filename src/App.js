import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //YOUR CODE HERE
  const [activities, setActivities] = useState([]);

  const generateActivity = function () {
    const getActivity = async function () {
      try {
        let response = await axios.get('https://www.boredapi.com/api/activity');
        console.log(response.data);
        setActivities([...activities, response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    getActivity();
  };

  useEffect(generateActivity, []);

  return (
    <>
      <button onClick={generateActivity}>Get Activity</button>

      {activities.length > 0 &&
        activities.map((el) => {
          return (
            <>
              <h1>{el.activity}</h1>
              <ExpandableListItem item={el} />
            </>
          );
        })}
    </>
  );
};

const ExpandableListItem = ({ item }) => {
  // YOUR CODE HERE
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = function () {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button onClick={toggleCollapse}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>

      {!isCollapsed && (
        <ul>
          <li>type: {item.type}</li>
          <li>participants: {item.participants}</li>
        </ul>
      )}
    </>
  );
};

export default App;
