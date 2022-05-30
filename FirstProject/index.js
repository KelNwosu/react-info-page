const page = (
    <div>
        <img style={{ width: "40px" }} src="./React-icon.svg.png" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>First Released in 2013</li>
            <li>Created by Jordan Walke</li>
            <li>Has Well over 100k on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including movile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.querySelector('#root'))