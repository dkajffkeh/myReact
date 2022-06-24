import React, {Component} from "react";

class Content extends Component {

    render () {
      return (
        <article>
          <h2>{this.props.abc}</h2>
          {this.props.haha}
      </article>
      );
    }
  }

export default Content
  