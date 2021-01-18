const data = [
    {
        id: 130,
        name: "Chimezirim Chijioke",
        age: 30,
        hobbies: ["Travelling", "Tech", "Smiling"]
    },
    {
        id: 135,
        name: "King",
        age: 18,
        hobbies: ["Coding", "Reading", "Gaming"]
    },
    {
        id: 235,
        name: "Hera",
        age: 28,
        hobbies: ["Dancing", "Coding", "Reading"]
    }
];

const Person = ({name,age,hobbies}) => {
    return (
        <div>
            <h2>{name.length > 6 ? name.substring(0,6) : name}</h2>
            <p>Learn some information about this person.</p>
            {age > 21 ? 
            (<p>have a drink!</p>) 
                : 
            (<p>you must be 21</p>)
            }
            {hobbies.map((hobby,idx) => <li key={idx}>{hobby}</li>)}
        </div>
    )
};
function App () {
    return(
        <div>
            {data.map(info=> <Person key={info.id} {...info}/>)}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("app"));