import React from "react";
import SearchBar from "./SearchBar.js";
import youtube from "../api/Youtube";

class App extends React.Component {
  state={videos:[]}
  onSearchSubmit=async (term)=>{
   const response = await youtube.get("/search",{params:{
     q:term,
     }})
    this.setState({videos:response.data.items})
  }
  render(){
    return (
      <div className={"ui container"}>
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <p>Number of Videos:{this.state.videos.length}</p>
      </div>
    );
  }
}

export default App;
