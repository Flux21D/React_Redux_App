import React from "react";
import {connect} from "react-redux";
import DownloadList from "./download-list";
import {getDownloads} from "../../actions/downloads";

class DownloadCenter extends React.Component {

  state = {
    downloadList: []
  };

  constructor (props) {
    super (props);

    this.props.getDownloads().then(data => {
      this.setState({
        downloadList: data.data
      });
    }).catch(err => {});
  }

  render () {

    return (
            <div id="download-center">
                <h2 className="text-center">Download Center</h2>

                <p className="text-center">Ut consectetur, sem vitae ornare hendrerit, metus felis<br /> auctor leo, non gravida nisl justo vel est.</p>

                <p className="text-center">The following titles are available for download:</p>

                <DownloadList downloadList={this.state.downloadList}/>
            </div>
    );

  }

}

export default connect(null, {getDownloads})(DownloadCenter);