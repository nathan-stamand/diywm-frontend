import React, { Component } from 'react';
import { connect } from "react-redux";

class ProjectInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="name">Project Name</label><br/>
          <input type="text" id="name"/><br/><br/>

          <label for="blog">Blog</label><br/>
          <textarea type="text" id="blog"/><br/><br/>
          
          <input type="submit" value="Create Project" />
        </form>
      </div>
    )
  }
}

export default connect()(ProjectInput);