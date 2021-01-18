const data = [
    {
        id: 1,
        username: "@Godbex",
        name: "Godbe",
        dateOfTweet: "17/01/2021",
        message: "This is my first Tweet !!!"
    },
    {
        id: 2,
        username: "@Kumasey",
        name: "Kingsley",
        dateOfTweet: "2/01/2021",
        message: " It's fun to be in this app !!!"
    },
    {
        id: 3,
        username: "@Queeneth",
        name: "Queen",
        dateOfTweet: "11/1/2021",
        message: "This app is cool, mad o !!!"
    },
    {
        id: 4,
        username: "@Nonski",
        name: "Nonso",
        dateOfTweet: "12/01/2021",
        message: "Someone should tell me how to use this app!"
    }
];

const Tweet = ({data:{username,name,dateOfTweet,message}}) => (
    <div className='tweet'>
    <h3>User Name: <span className='user'>{username}</span></h3>
    <h4>Name: <span className='user'>{name}</span></h4>
    <h4>Date: <span className='user'>{dateOfTweet}</span></h4>
    <p className='text'>{message}</p>
</div>
);


function App(){
    return(
        <div>
            {
                data.map(info=> <Tweet key={info.id} data={info}/>)
            }
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));