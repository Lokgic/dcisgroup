const  useEffect = require("react").useEffect


function HomePage() {
    useEffect(()=>{
    window.location.href = 'https://sites.duke.edu/marcdryser/'
    },[])

    return <div>Forwarding... if you are not being redirected please click <a href="https://sites.duke.edu/marcdryser/">here to visit Marc D. Ryser 's homepage.</a></div>
  }
  
  export default HomePage
  