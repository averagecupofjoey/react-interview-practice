import { useState } from 'react';

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [robots, setRobots] = useState([]);
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setRobots([...robots, searchTerm]);
    setSearchTerm('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={searchTerm}></input>
        <button type='submit'>Enter</button>
      </form>

      {robots.length > 0 && (
        <>
          {robots.map((el) => {
            return (
              <img
                alt='robot'
                width={200}
                height={200}
                src={`https://robohash.org/${el}`}
                onClick={() => setRobots(robots.filter((bot) => bot !== el))}
              ></img>
            );
          })}
        </>
      )}
    </>
  );
};
export default App;
